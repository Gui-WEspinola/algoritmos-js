// Link

const stringToArray = string => string.split(' '); // solução mais elegante

function basicStringToArray(string) { // solução mais básica
    return string.split(' ');
}

console.log(stringToArray("Eu amo Java!"));
console.log(basicStringToArray("Eu gosto de JavaScript!"))