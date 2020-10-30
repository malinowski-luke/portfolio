// img imports
import jeepthings from '../assets/projects/jeepthings.jpg'
import jeepthingsCover from '../assets/projects/jeepthingsCover.jpg'
import calculator from '../assets/projects/calculator.jpg'
import calculatorCover from '../assets/projects/calculatorCover.jpg'
import notepad from '../assets/projects/notepad.jpg'
import notepadCover from '../assets/projects/notepadCover.jpg'
// import helo from '../assets/projects/helo.jpg'
// import heloCover from '../assets/projects/heloCover.jpg'
// import starWarsQuotes from '../assets/projects/StarWarsQuotes.jpg'
// import starWarsQuotesCover from '../assets/projects/StarWarsQuotesCover.jpg'
import devQuiz from '../assets/projects/devQuiz.gif'
import devQuizCover from '../assets/projects/devQuizCover.jpg'

export default [
  {
    image: jeepthings,
    coverImage: jeepthingsCover,
    link: 'http://www.jeepthingsapp.com/#/',
    github: 'https://github.com/malinowskil123/jeepthings',
    title: 'JeepThings',
    text: `A web app for Jeep lovers and rebuilders to trade, sell, and buy auto parts. Contains a fully working CRUD operations. Users have the ability to filter parts by a keyword and sort them by price. Jeepthings integrates google maps api to show a part's location on a map. Users also receive welcome and update emails as well as emails from other users regarding the parts they posted.`,
  },
  {
    image: devQuiz,
    coverImage: devQuizCover,
    link: 'https://dev-quiz.herokuapp.com/',
    github: 'https://github.com/malinowskil123/dev-quiz',
    title: 'Dev Quiz',
    text: `Test your JavaScript and Front-End knowledge with Dev Quiz: a web based quiz app, built to test your front-end skill. Users are able to pick a quiz from a variety of Front-End focused subjects. Users also have the ability to toggle styling from light mode to dark mode.`,
  },

  {
    image: calculator,
    coverImage: calculatorCover,
    link: 'https://calculator-js-lm.herokuapp.com/',
    github: 'https://github.com/malinowskil123/calculator',
    title: 'Calculator',
    text: `A web-based alternative for a traditional calculator. Users are able to enter and calculate simple mathematical expressions. Entered values are validated and if an error is detected a syntax error pop-up is displayed.`,
  },
  // {
  //   image: starWarsQuotes,
  //   coverImage: starWarsQuotesCover,
  //   github: 'https://github.com/malinowskil123/quote-generator',
  //   title: 'Star Wars Quotes Generator',
  //   text: `Get random quotes from various Star Wars Heroes and Villains. If you like the quote you get, you can tweet it via twitter's api.`,
  // },
  // {
  //   image: helo,
  //   coverImage: heloCover,
  //   github: 'https://github.com/malinowskil123/helo',
  //   title: 'Helo',
  //   text: `A simple social media application, which allows users to create profiles, post blogs, and interact with other user’s posts. Users are also able to filter posts by keywords and post id's to find their own posts.`,
  // },
  {
    image: notepad,
    coverImage: notepadCover,
    github: 'https://github.com/malinowskil123/java-swing-notepad',
    title: 'NotePad',
    text: `A desktop notepad application developed using Java. Users are able to create, overwrite and save txt files locally on their computer. This app features a traditional edit section with copy, paste, cut, undo and redo actions. Entered text is proecessed to get word count and sentence count values along with a few other metrics which feed into a text complexity algorithm which outputs a Flesch text complexity score.`,
  },
]
