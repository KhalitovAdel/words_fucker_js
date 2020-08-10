export interface CorrectLangOpt {
    /**@default eu*/
    toLanguage?: 'eu' | 'ru';
    /**@default
     * key RU symbol, value EN
     *
     * {
     *
     *    е: 'e',
     *
     *    т: 't',
     *
     *    у: 'y',
     *
     *    о: 'o',
     *
     *    р: 'p',
     *
     *    а: 'a',
     *
     *    н: 'h',
     *
     *    к: 'k',
     *
     *    х: 'x',
     *
     *    с: 'c',
     *
     *    в: 'b',
     *
     *    м: 'm',
     *
     *}
     * */
    customLibrary?: {[key: string]: string}
}

export interface DefaultFormatLibrary {
    [key: string]: string
}