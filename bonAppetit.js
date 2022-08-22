function bonAppetit(bill, k, b) {
  // Write your code here
  let contribution = b; // better naming

  bill.splice(k, 1); // remove the kth element from the array

  let actualCharge = bill.reduce((prev, next) => prev + next) / 2;

  let refund = contribution - actualCharge;

  if (refund === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(refund);
  }
}
