const repeatString = function(string , repeats) {
    if(repeats < 0) {
        return "ERROR";
    }
    let repeated = [];
    for(i=0; i<repeats; i++) {
        repeated[i] = string;
    }
    return repeated.join("");
};

// Do not edit below this line
module.exports = repeatString;
