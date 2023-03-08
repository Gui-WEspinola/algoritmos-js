function findAverage(array) {
    let arraySum = 0

    if (!array.length) return 0

    for (const number of array) { arraySum += number }
    return arraySum / array.length;
}

console.log(findAverage([1, 2, 3, 4]))
console.log(findAverage([1.2, 5.4, 5.5]))

// TODO -> aprender e implementar solução com array.reduce