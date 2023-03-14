function countPositivesSumNegatives(input) {
    const result = []
    let [positives, negatives] = [0,0];

    if (input === null || input.length === 0) return result; // tratando inputs inválidos ou nulos

    input.forEach(n => {
        if (n > 0) positives++;
        else negatives += n;
    });
    result.push(positives, negatives); // Adicionando cada elemento em sequência no resultado
    return result;
}

console.log(countPositivesSumNegatives([1,2,3,4,5,6,-1,-2,-3,-4,-5,-6]))