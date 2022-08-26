function designerPdfViewer(h, word) {
  let charCode = 0;
  let tallestWord = word
    .split("")
    .map((word) => {
      charCode = word.charCodeAt(word) - 97;
      return h[charCode];
    })
    .reduce((prev, next) => (prev > next ? prev : next));

  return tallestWord * word.length;
}
