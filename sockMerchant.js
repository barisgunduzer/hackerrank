function sockMerchant(n, ar) {
  // Write your code here
  if (n === 1) return 0;

  const groupedSocks = {};

  ar.forEach((sock) => {
    if (groupedSocks[sock]) {
      ++groupedSocks[sock];
    } else {
      groupedSocks[sock] = 1;
    }
  });

  const pairedSocks = Object.values(groupedSocks).filter((value) => value > 1);

  if (pairedSocks.length === 0) return 0;

  return pairedSocks.reduce((prev, next) => prev + next);
}

console.log(sockMerchant(2, [10, 10, 20, 30]));
