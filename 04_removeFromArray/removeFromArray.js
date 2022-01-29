const removeFromArray = function() {
    let array = arguments[0];
    for(i=1; i<arguments.length; i++) {
        if(array.indexOf(arguments[i]) < 0) {
            // Do nothing
        } else {
            array.splice(array.indexOf(arguments[i]) , 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
