const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.stringToArray = function (string) {
  const letters = string.split("");
  return letters;
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  wordArray = this.stringToArray(this.word);
  let matchingLetters;
  let allMatchingLetters = [];
  let allMatchingLettersForAllGivenOtherWords = [];
  let isItAnAnagram;

  const otherWordsAsArray = otherWords.map((eachOtherWord) => {
    return this.stringToArray(eachOtherWord); // this works and does what i think it does
  })

  // for (let otherWord of otherWordsAsArray) {
  otherWordsAsArray.forEach((otherWord, index, array) => {
    for (let wordLetter of wordArray) {
       // matchingLetters = otherWordsAsArray[0].filter((letter) => {
       matchingLetters = otherWord.filter((letter) => {
        return wordLetter === letter;
      });
        allMatchingLetters.push(matchingLetters[0])
    };
// here all matching letters is full of the matching letters for this otherWord
    isItAnAnagram = allMatchingLetters.every((letter) => {
      return letter !== undefined;
    });

    if (isItAnAnagram === true) {
      allMatchingLettersForAllGivenOtherWords.push(array[index])
    }
  // allMatchingLettersForAllGivenOtherWords.push(allMatchingLetters)
  allMatchingLetters = []
});
// return isItAnAnagram

  return allMatchingLettersForAllGivenOtherWords.map((word) => {
    return word.join("")
  })
  return allMatchingLettersForAllGivenOtherWords

  // return otherWordsAsArray this can return what i think it returns
  // return wordArray
}


module.exports = AnagramFinder;
