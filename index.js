const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (words) => {
  words = tutorials.map(tutorial => 
    tutorial.replace(/\b\w/g, match => match.toUpperCase())
  );
  return words; //This is a chatgpt code OBVIOUSLY.... I tried to solve it and I got to the point where I turned the whole array to
               //a sting and made all the letters uppercase. I got bored and tried chatgpt and it gave me a wonderful solution. I really liked 
               //it and learned more about regex. So I will push this :)
}