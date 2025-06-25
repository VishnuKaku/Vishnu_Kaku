function generateSeries(a) {
    const n = a % 2 === 1 ? a : a - 1;
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(2 * i + 1);
    }
    return result;
}

console.log(generateSeries(1));
console.log(generateSeries(2));
console.log(generateSeries(3));
console.log(generateSeries(4));
console.log(generateSeries(5));
console.log(generateSeries(6));
