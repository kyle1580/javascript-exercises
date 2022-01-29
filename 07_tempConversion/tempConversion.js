const ftoc = function(tempF) {
  tempC = (5/9) * (tempF - 32);
    if(tempC % Math.floor(tempC) != 0) {
      return Number(tempC.toFixed(1));
    } else {
      return Number(tempC);
    }
};

const ctof = function(tempC) {
  tempF = (tempC * (9/5)) + 32;
  if(tempF % Math.floor(tempF) != 0) {
    return Number(tempF.toFixed(1));
  } else {
    return Number(tempF);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
