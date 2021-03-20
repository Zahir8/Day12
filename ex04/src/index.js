function sumFibonacci(num){
    if (num < 2) {
        return num;
    } else {
        var l = []
        var a = sumFibonacci(num-2) + sumFibonacci(num-1);
        if (a % 2 !== 0) {
            l.push(a);
        }
        return l;
    }
}

console.log(sumFibonacci(5));
module.exports = sumFibonacci;