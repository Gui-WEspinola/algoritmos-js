function decipherThis(str) {
    const words = str.split(' ');
    let result = '';

    for (const word of words) {
        let charCode = '';
        let deciphered = '';

        if (!isNaN(parseInt(word))) {
            deciphered = String.fromCharCode(Number(word));
        }

        for (let i = 0; i < word.length; i++) {
            if (!isNaN(parseInt(word[i]))) {
                charCode += word[i];
            } else if (i === word.length - 1){
                let firstChar = String.fromCharCode(Number(charCode));
                deciphered = firstChar + word[i];
            } else {
                let firstChar = String.fromCharCode(Number(charCode));
                let lastChar = word[word.length - 1];
                let secChar = word[i];
                let midChars = word.substring(i+1, word.length - 1)
                deciphered = firstChar + lastChar + midChars + secChar;
                break;
            }
        }
        result.length !== 0 ? result += ' ' + deciphered : result += deciphered;
    }
    return result;
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
