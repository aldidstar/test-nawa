const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Input one line of words: ",
});

console.log("Sort Character");
rl.prompt();

rl.on("line", (word) => {
  word = word.toLowerCase();

  const letterVowel = {};
  const letterConsonant = {};

  for (const letter of word.replace(" ", "")) {
    const obj = /[aeiou]/i.test(letter) ? letterVowel : letterConsonant;
    obj[letter] = (obj[letter] || "") + letter;
  }
  const vowels = Object.values(letterVowel).join("");
  const consonants = Object.values(letterConsonant).join("");
  rl.close();

  console.log("Vowel Characters :\n" + vowels);
  console.log("Consonant Characters :\n" + consonants);
});
