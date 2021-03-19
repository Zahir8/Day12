function myCounter(n){
    if (n < 1){
        return [];
    } else {
        var countArray = [n];
        countArray = countArray.concat(myCounter(n-1));
        return countArray;
    }
}
console.log(myCounter(10));
module.exports = myCounter;
