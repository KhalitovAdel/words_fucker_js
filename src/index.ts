import { library } from './constants/format.library';
import { CorrectLangOpt } from "./interfaces/format.interfaces";

export default function fucker(value: string): Fucker {
    if (typeof value !== 'string') throw new Error('value must be a string');
    return new Fucker(value || '');
}

class Fucker {
    private fuckme: string;

    constructor(value: string) {
        this.fuckme = value;
    }

    public correctLang(options?: CorrectLangOpt): Fucker {
        this.fuckme = this.fuckme
            .split('')
            .map((letter) => {
                const isUpperCase = letter === letter.toUpperCase();
                //prettier-ignore
                const newSymbol = !options || (options.toLanguage && options.toLanguage === 'eu')
                    ? library[letter.toLowerCase()] || letter
                    : Object.values(library).findIndex(el => el === letter.toLowerCase()) !== -1
                        ? Object.keys(library)[Object.values(library).findIndex(el => el === letter.toLowerCase())]
                        : letter;
                return isUpperCase ? newSymbol.toUpperCase() : newSymbol;
            })
            .join('')
        return this;
    }

    get value(): string {
        return this.fuckme;
    }
}