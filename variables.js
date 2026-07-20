// freeCodeCamp JavaScript Practice
// Topic: Variables and Strings
// Lesson 1 - Variables
//================================================

console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

console.log("Well, it was nice to talk to you. Have a nice day!");

//==============================================
// Lesson 2
//==============================================


console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");

// ending lesson 2
//==============================================

//Lesson 3 - Learn how to use include() and slice() methods

const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log("Workshop complete! You now know how to use includes() and slice().");
