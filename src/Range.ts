import { ManifestResource } from "./ManifestResource";
import { TreeNode } from "./TreeNode";
import { IManifestoOptions } from "./IManifestoOptions";
import { Duration } from "./Duration";
import { Utils } from "./Utils";
import { Behavior, ViewingDirection, ViewingHint } from "@iiif/vocabulary";
import { LanguageMap } from "./LanguageMap";
import { TreeNodeType } from "./TreeNodeType";
const BehaviorEnum = require('../node_modules/@iiif/vocabulary/dist-commonjs/').Behavior;

export class Range extends ManifestResource {
    private _ranges: Range[] | null = null;
    public canvases: string[] | null = null;
    public items: ManifestResource[] = [];
    public parentRange: Range | undefined;
    public path: string;
    public treeNode: TreeNode;

    constructor(jsonld?: any, options?: IManifestoOptions){
        super(jsonld, options);
    }

    getCanvasIds(): string[] {

        if (this.__jsonld.canvases) {
            return this.__jsonld.canvases;
        } else if (this.canvases) {
            return this.canvases;
        }

        return [];
    }

    getDuration(): Duration | undefined {

        let start: number | undefined;
        let end: number | undefined;

        if (this.canvases && this.canvases.length) {
            for (let i = 0; i < this.canvases.length; i++) {
                const canvas: string = this.canvases[i];
                let temporal: number[] | null = Utils.getTemporalComponent(canvas);
                if (temporal && temporal.length > 1) {
                    if (i === 0) {
                        start = Number(temporal[0]);
                    }

                    if (i === this.canvases.length - 1) {
                        end = Number(temporal[1]);
                    }
                }
            }
        } else {

            // get child ranges and calculate the start and end based on them
            const childRanges: Range[] = this.getRanges();

            for (let i = 0; i < childRanges.length; i++) {
                const childRange: Range = childRanges[i];

                const duration: Duration | undefined = childRange.getDuration();

                if (duration) {
                    if (i === 0) {
                        start = duration.start;
                    }

                    if (i === childRanges.length - 1) {
                        end = duration.end;
                    }
                }
            }

        }

        if (start !== undefined && end !== undefined) {
            return new Duration(start, end);
        }

        return undefined;

    }

    // getCanvases(): ICanvas[] {
    //     if (this._canvases) {
    //         return this._canvases;
    //     }
        
    //     return this._canvases = <ICanvas[]>this.items.en().where(m => m.isCanvas()).toArray();
    // }

    getRanges(): Range[] {

        if (this._ranges) {
            return this._ranges;
        }
        
        return this._ranges = <Range[]>this.items.filter(m => m.isRange());
    }

    getBehavior(): Behavior | null {

        let behavior: any = this.getProperty('behavior');

        if (Array.isArray(behavior)) {
            behavior = behavior[0];
        }

        if (behavior) {
            return behavior;
        }

        return null;
    }

    getViewingDirection(): ViewingDirection | null {
        return this.getProperty('viewingDirection');
    }

    getViewingHint(): ViewingHint | null {
        return this.getProperty('viewingHint');
    }

    getTree(treeRoot: TreeNode): TreeNode{

        treeRoot.data = this;
        this.treeNode = treeRoot;

        const ranges: Range[] = this.getRanges();

        if (ranges && ranges.length) {
            for (let i = 0; i < ranges.length; i++) {
                const range: Range = ranges[i];
                const node: TreeNode = new TreeNode();
                treeRoot.addNode(node);
                this._parseTreeNode(node, range);
            }
        }

        Utils.generateTreeNodeIds(treeRoot);

        return treeRoot;
    }

    public spansTime(time: number): boolean {

        const duration: Duration | undefined = this.getDuration();

        if (duration) {
            if (time >= duration.start && time <= duration.end) {
                return true;
            }
        }

        return false;            
    }

    private _parseTreeNode(node: TreeNode, range: Range): void {
        node.label = <string>LanguageMap.getValue(range.getLabel(), this.options.locale);
        node.data = range;
        node.data.type = Utils.normaliseType(TreeNodeType.RANGE);
        range.treeNode = node;

        const ranges: Range[] = range.getRanges();

        if (ranges && ranges.length) {

            for (let i = 0; i < ranges.length; i++) {
                const childRange = ranges[i];
                const behavior: Behavior | null = childRange.getBehavior();

                if (behavior === BehaviorEnum.NO_NAV) {
                    continue;
                } else {
                    const childNode: TreeNode = new TreeNode();
                    node.addNode(childNode);
                    this._parseTreeNode(childNode, childRange);
                }                    
            }
        }
    }
}