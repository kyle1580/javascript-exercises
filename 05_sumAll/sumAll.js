const sumAll = function(...args) {
    for(i=0; i<args.length; i++) {
        if(typeof args[i] != "number") {
            return "ERROR";
        }
    }
    let start = Math.min(...args);
    let stop = Math.max(...args);
    if(start < 0 || stop < 0) {
        return "ERROR";
    }
    let sum = start;
    for(i=start+1; i<=stop; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
