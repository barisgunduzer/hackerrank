// Sherlock and the valid string (medium)

function isValid(s) {
  // acronyms:
  // frequency(ies): freq(s)
  // distribution: dist

  let result = "NO";
  const letters = s.split("").sort();
  const letterFreqs = {};
  const letterFreqsDist = {};

  const isLetterFreqsValid = () => {
    return !(sortedLetterFreqs[0] === 1 && sortedLetterFreqs[1] === 1);
  };

  const setLetterFreqs = () => {
    letters.forEach((letter) => {
      if (letterFreqs[letter]) {
        ++letterFreqs[letter];
      } else {
        letterFreqs[letter] = 1;
      }
    });
  };

  setLetterFreqs();

  const isLetterFreqsSetValid = () => {
    const [first, last] = letterFreqsSet;
    return first === 1 || last - first === 1;
  };

  const sortedLetterFreqs = Object.values(letterFreqs).sort();

  const letterFreqsSet = new Set(sortedLetterFreqs);

  const setLetterFreqsDist = () => {
    sortedLetterFreqs.forEach((freq) => {
      if (letterFreqsDist[freq]) {
        ++letterFreqsDist[freq];
      } else {
        letterFreqsDist[freq] = 1;
      }
    });
  };

  const isLetterFreqsDistValid = () => {
    setLetterFreqsDist();
    const sortedLetterFreqsDist = Object.values(letterFreqsDist).sort();
    const first = sortedLetterFreqsDist[0];
    const second = sortedLetterFreqsDist[1];
    return (first === 1 && second === 1) || (first === 1 && second > 1);
  };

  switch (letterFreqsSet.size) {
    case 1:
      result = "YES";
      break;
    case 2:
      result =
        isLetterFreqsValid() &&
        isLetterFreqsSetValid() &&
        isLetterFreqsDistValid()
          ? "YES"
          : "NO";
      break;
    default:
      result = "NO";
      break;
  }

  return result;
}

console.log(isValid("aabbcd"));
