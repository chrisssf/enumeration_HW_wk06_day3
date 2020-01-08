const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const lettersPhraseHas = this.alphabet.filter((alphabetLetter) => {
    return this.phrase.split('').some((phraseLetter) => {
      return phraseLetter.toLowerCase() === alphabetLetter.toLowerCase()
    });
  });
  return lettersPhraseHas.length === 26;
}

module.exports = PangramFinder;
