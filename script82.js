//Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6) 
    count++;
  else if (card >="10")
    count--;
  return count + (count > 0 ? ' Bet' : ' Hold');
}
  // Only change code above this line

cc(10); cc('J'); cc('Q'); cc('K'); cc('A');
console.log(cc(8))