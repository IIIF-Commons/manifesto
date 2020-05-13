
namespace Manifesto {
    export class Range extends ManifestResource implements IRange{
        private _ranges: IRange[] | null = null;
        public canvases: string[] | null = null;
        public items: IManifestResource[] = [];
        public parentRange: Range;
        public path: string;
        public treeNode: ITreeNode;

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

            if (this.canvases && this.canvases.length) {

                const startTimes: number[] = [];
                const endTimes: number[] = [];

                for (const canvas of this.canvases) {
                    if (!canvas) continue;
                    const [, canvasId, start, end] = (canvas.match(
                      /(.*)#t=([0-9.]+),?([0-9.]+)?/
                    ) || [undefined, canvas]) as string[];

                    if (canvasId) {
                        startTimes.push(parseFloat(start));
                        endTimes.push(parseFloat(end));
                    }
                }

                if (startTimes.length && endTimes.length) {
                    return new Duration(
                      Math.min(...startTimes),
                      Math.max(...endTimes)
                    );
                }
            } else {
                // get child ranges and calculate the start and end based on them
                const childRanges: Manifesto.IRange[] = this.getRanges();
                const startTimes: number[] = [];
                const endTimes: number[] = [];

                for (const childRange of childRanges) {
                    const duration = childRange.getDuration();
                    if (duration) {
                        startTimes.push(duration.start);
                        endTimes.push(duration.end);
                    }
                }

                if (startTimes.length && endTimes.length) {
                    return new Duration(
                      Math.min(...startTimes),
                      Math.max(...endTimes)
                    );
                }
            }

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
                const childRanges: Manifesto.IRange[] = this.getRanges();

                for (let i = 0; i < childRanges.length; i++) {
                    const childRange: Manifesto.IRange = childRanges[i];

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

        getRanges(): IRange[] {

            if (this._ranges) {
                return this._ranges;
            }
            
            return this._ranges = <IRange[]>this.items.filter(m => m.isRange());
        }

        getBehavior(): Behavior | null {

            let behavior: any = this.getProperty('behavior');

            if (Array.isArray(behavior)) {
                behavior = behavior[0];
            }

            if (behavior) {
                return new Behavior(behavior);
            }

            return null;
        }

        getViewingDirection(): ViewingDirection | null {
            if (this.getProperty('viewingDirection')) {
                return new ViewingDirection(this.getProperty('viewingDirection'));
            }

            return null;
        }

        getViewingHint(): ViewingHint | null {
            if (this.getProperty('viewingHint')) {
                return new ViewingHint(this.getProperty('viewingHint'));
            }

            return null;
        }

        getTree(treeRoot: ITreeNode): ITreeNode{

            treeRoot.data = this;
            this.treeNode = treeRoot;

            const ranges: IRange[] = this.getRanges();

            if (ranges && ranges.length) {
                for (let i = 0; i < ranges.length; i++) {
                    const range: IRange = ranges[i];
                    const node: ITreeNode = new TreeNode();
                    treeRoot.addNode(node);
                    this._parseTreeNode(node, range);
                }
            }

            Manifesto.Utils.generateTreeNodeIds(treeRoot);

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

        private _parseTreeNode(node: ITreeNode, range: IRange): void {
            node.label = <string>LanguageMap.getValue(range.getLabel(), this.options.locale);
            node.data = range;
            node.data.type = Utils.normaliseType(TreeNodeType.RANGE.toString());
            range.treeNode = node;

            const ranges: IRange[] = range.getRanges();

            if (ranges && ranges.length) {

                for (let i = 0; i < ranges.length; i++) {
                    const childRange = ranges[i];
                    const behavior: Behavior | null = childRange.getBehavior();

                    if (behavior && behavior.toString() === Behavior.NONAV.toString()) {
                        continue;
                    } else {
                        const childNode: ITreeNode = new TreeNode();
                        node.addNode(childNode);
                        this._parseTreeNode(childNode, childRange);
                    }                    
                }
            }
        }
    }
}
