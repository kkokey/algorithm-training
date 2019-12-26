import touristTranslation from "../touristTranslation";

/*
    codechef problem
    name: Tourist Translations
    url: https://www.codechef.com/problems/TOTR
*/
describe('Tourist Translation', function () {
    let permutation = '';

    beforeEach(function() {
        permutation = 'qwertyuiopasdfghjklzxcvbnm';
        return permutation;
    });

    test('separate content', function() {
        let longContent = '5 qwertyuiopasdfghjklzxcvbnm\nPh\nPcssi\nBpke_kdc_epclc_jcijsc_mihyo?\nEpcf_kdc_liswhyo_EIED_hy_Vimcvpcn_Zkdvp_siyo_viyecle.\nIpp!';
        let result = touristTranslation.separateStr(longContent);
        expect(result).toBe('Hi\nHello\nWhat are these people doing?\nThey are solving TOTR in Codechef March long contest.\nOhh!');
    });

    test('should match', function () {
        const translationData = touristTranslation.translator(permutation, 'Ph');
        expect(translationData).toBe('Hi');
    });

    test('should match', function () {
        const translationData = touristTranslation.translator(permutation, 'Pcssi');
        expect(translationData).toBe('Hello');
    });

    test('should match', function () {
        const translationData = touristTranslation.translator(permutation, 'Bpke_kdc_epclc_jcijsc_mihyo?');
        expect(translationData).toBe('What are these people doing?');
    });

    test('should match', function () {
        const translationData = touristTranslation.translator(permutation, 'Epcf_kdc_liswhyo_EIED_hy_Vimcvpcn_Zkdvp_siyo_viyecle.');
        expect(translationData).toBe('They are solving TOTR in Codechef March long contest.');
    });
});