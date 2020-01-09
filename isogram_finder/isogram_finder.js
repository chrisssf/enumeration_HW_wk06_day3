const IsogramFinder = function (word) {
  this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
  let isIsogram = true;

  this.word.split('').forEach((wordLetter) => {

    const countingLetters = this.word.split('').filter((wordLetterCheck) => {
      return wordLetter.toLowerCase() === wordLetterCheck.toLowerCase()
    });
    const length = countingLetters.length
    if (length > 1) {
      isIsogram = false
    }
  });
  return isIsogram;
};

// subde r matoglyphic

module.exports = IsogramFinder;
