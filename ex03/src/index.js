function rangeOfNumbers(startN, endN){
    if (startN > endN) {
        return "The starting number will always be less than or equal to the ending number";
    }
    if (endN === startN) {
    return [startN];
    } else {
        var countArray = rangeOfNumbers(startN, endN - 1);
        countArray.push(endN);
        return countArray
    };
}
console.log(rangeOfNumbers(5, 10));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;