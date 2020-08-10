import fucker from './index'

describe('fucker().correctLang().value method testing russian => english', () => {
    it('should ВОВА by russian words get BOBA in english words', () => {
        expect(fucker('ВОВА').correctLang().value).toBe('BOBA');
    });

    it('should BOBA by english words get ВОВА in russian words', () => {
        expect( fucker('BOBA').correctLang({toLanguage: 'ru'}).value).toBe('ВОВА');
    });

    it('should BOВА - BO by eng words and BA by russian words get BOBA in english words', () => {
        expect(fucker('BOВА').correctLang().value).toBe('BOBA');
    });

    it('should BoВА - Bo by eng words and Bа by russian words get BOBA in english words and save register', () => {
        expect(fucker('BoВа').correctLang().value).toBe('BoBa');
    });
});
