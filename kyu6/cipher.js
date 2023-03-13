function cipher(str) {
    const words = str.split(' ');
    let cipher = '';

    for (let word of words) {
        let result = String(word.charCodeAt(0));
        if (word.length > 2) {
            let lastChar = word[word.length - 1];
            let secondChar = word[1];
            let middleChars = word.substring(2, word.length - 1);
            result += lastChar + middleChars + secondChar;
        }
        cipher.length !== 0 ? cipher += ' ' + result : cipher += result;
    }
    return cipher;
}

console.log(decipherThis("guilherme"));

function letterValue(string) {
    return string.charCodeAt(0);
}

let nome = "guilherme"
console.log(nome.substring(1, nome.length - 1));
