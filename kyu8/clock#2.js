function convertToMilliseconds(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

console.log(convertToMilliseconds(0, 1, 1))