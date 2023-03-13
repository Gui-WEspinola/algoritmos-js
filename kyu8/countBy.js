// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
    let z = [];

    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }

    return z;
}
console.log(countBy(2, 5));

// resolução alternativa do CodeWars
const contarMultiplos = (x, n) => [...Array(n)].map((_, index) => ++index * x);

console.log(contarMultiplos(4, 12));
