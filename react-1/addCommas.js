function addCommas(num) {
    // Treat all numbers as positive,
    // but if the input is negative, remember the sign.
    let sign = "";
    if (num < 0) sign = "-";
    num = Math.abs(num);
  
    // Convert to a string and split on either side of the decimal
    let [whole, decimal] = num.toString().split(".");
  
    if (decimal) {
      return `${sign}${commaInsert(whole)}.${decimal}`;
    }
  
    return `${sign}${commaInsert(whole)}`;
  }
  
  function commaInsert(str) {
    // keep track of where the comma should go
    let commaIndex = 0;
    let commaStr = "";
  
    // iterate backwards
    for (let i = str.length - 1; i >= 0; i--) {
      commaStr = str[i] + commaStr;
      commaIndex++;
  
      // add a comma after every third character
      // except at the beginning
      if (commaIndex % 3 === 0 && i !== 0) {
        commaStr = "," + commaStr;
      }
    }
  
    return commaStr;
  }
  
  module.exports = addCommas;