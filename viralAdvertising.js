function viralAdvertising(n) {
  // Write your code here

  let shared = 5;
  let liked = 5;
  let cumulative = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      liked = Math.floor(shared / 2);
      cumulative += liked;
    } else {
      shared = liked * 3;
      liked = Math.floor(shared / 2);
      cumulative += liked;
    }
  }

  return cumulative;
}
