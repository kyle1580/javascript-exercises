const fibonacci = function() {
    if(arguments[0] < 0) {
        return "OOPS";
    }
    let fibSeries = [1 , 1];
    let i = 2;
    while(fibSeries.length < arguments[0]) {
        fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
        i++;
    }
    return fibSeries[arguments[0] - 1];
};

// Do not edit below this line
module.exports = fibonacci;
