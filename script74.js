//Chaining If Else Statements
function testSize(num) {
    // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  }
  
    return "Change Me";
    // Only change code above this line
  }
  console.log(testSize(4))
  console.log(testSize(7))
  console.log(testSize(10))
  console.log(testSize(15))
  console.log(testSize(25))