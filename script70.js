//Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val > 20 || val < 10) {
      return "Outside";
    }
  
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  console.log (testLogicalOr(9))
  console.log(testLogicalOr(15))
  console.log(testLogicalOr(21))