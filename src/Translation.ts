namespace Manifesto {
    export class Translation {
        value: string;
        locale: string;

        constructor(value: string, locale: string) {
            this.value = value;
            this.locale = locale;
        }
    }
}