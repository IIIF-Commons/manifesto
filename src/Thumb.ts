
module Manifesto {
    export class Thumb {
        constructor(public index: number,
                    public uri: string,
                    public label: string,
                    public width: number,
                    public height: number,
                    public visible: boolean) {
        }
    }
}