function generateOddSeries(a) {
    const result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }
    return result;
}

console.log(generateOddSeries(1));
console.log(generateOddSeries(3));
console.log(generateOddSeries(4));
