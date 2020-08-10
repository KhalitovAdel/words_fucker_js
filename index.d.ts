import { CorrectLangOpt } from "./src/interfaces/format.interfaces";

declare function fucker(value: string, options?: CorrectLangOpt): fucker.Fucker

declare namespace fucker {
    interface Fucker {
        correctLang(options?: CorrectLangOpt): Fucker;
        value: string;
    }
}

export default typeof fucker;