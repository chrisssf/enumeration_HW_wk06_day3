const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.stringToArray = function (string) {
  const letters = string.split("");
  return letters;
};

AnagramFinder.prototype.findAnagrams = function (checkWords) {
  wordAsArray = this.stringToArray(this.word);
  let matchingLetters;
  let allMatchingLetters = [];
  let allMatchingLettersForAllGivenCheckWords = [];
  let isItAnAnagram;

  const checkWordsAsArray = checkWords.map((eachCheckWord) => {
    return this.stringToArray(eachCheckWord);
  });
  checkWordsAsArray.forEach((checkWord, index, array) => {
    for (const wordLetter of wordAsArray) {
       matchingLetters = checkWord.filter((letter) => {
        return wordLetter.toLowerCase() === letter.toLowerCase();
      });
      allMatchingLetters.push(matchingLetters[0]);
    };
    isItAnAnagram = allMatchingLetters.every((letter) => {
      return array[index].length === wordAsArray.length && letter !== undefined && array[index].toString() !== wordAsArray.toString()
    });

    // if (array[index].toString() == wordAsArray.toString()) {
    //   isItAnAnagram = false;
    // };

    if (isItAnAnagram === true) {
      allMatchingLettersForAllGivenCheckWords.push(array[index]);
    };
    allMatchingLetters = [];
  });

  return allMatchingLettersForAllGivenCheckWords.map((word) => {
    return word.join("");
  });
};

module.exports = AnagramFinder;
