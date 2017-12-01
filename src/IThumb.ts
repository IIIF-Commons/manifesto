namespace Manifesto {
    // todo: deprecate
    // this is used by Sequence.getThumbs
    export interface IThumb {
        data: any;
        height: number;
        index: number;
        label: string;
        uri: string;
        visible: boolean;
        width: number;
    }
}