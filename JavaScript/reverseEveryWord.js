function reverseWords(sentence) {
  const words = sentence.split(' ');
 
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  const reverseSentence = reversedWords.join(' ');

  return reverseSentence;
}


const input = "This is a sunny day";
const reversedSentence = reverseWords(input);

console.log("Original sentence: " + input);
console.log("Reversed sentence: " + reversedSentence);
