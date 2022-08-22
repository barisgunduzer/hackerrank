// Subarray Division (easy)

function birthday(s, d, m) {
  let segments = [];
  let result = 0;

  for (let i = 0; i < s.length - m + 1; i++) {
    segments[i] = s.slice(i, i + m).reduce((prev, next) => prev + next, 0);

    if (segments[i] === d) {
      ++result;
    }
  }

  return result;
}
