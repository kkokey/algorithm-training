/*
    codechef problem
    name: Tourist Translations
    url: https://www.codechef.com/problems/TOTR
*/
export default {
    separateStr(longMsg) {
        let strArr = longMsg.split('\n');
        let wordCntWithGuideArr = strArr[0].split(' ');
        let guideStr = wordCntWithGuideArr[1];
        let resultArr = [];

        strArr = strArr.slice(1, strArr.length);

        strArr.forEach(separatedStr => {
            resultArr.push(this.translator(guideStr, separatedStr));
        });

        return resultArr.join('\n');
    },

    translator(translatorGuide, msg) {

        let originAlphabet = 'abcdefghijklmnopqrstuvwxyz';
        let resultStrArr = [];

        let strArr = Array.from(msg.concat());
        strArr.forEach(word => {
            let wordNumber = originAlphabet.indexOf(word);
            if (word === '_') {
                resultStrArr.push(' ');
                return;
            }
            if (word === '?' || word === '.' || word === '!' || word === ',') {
                resultStrArr.push(word);
                return;
            }
            if (wordNumber === -1) {
                wordNumber = originAlphabet.indexOf(word.toLowerCase());
                resultStrArr.push(translatorGuide[wordNumber].toUpperCase());
            } else {
                resultStrArr.push(translatorGuide[wordNumber]);
            }
        });
        return resultStrArr.join('');
    }
}