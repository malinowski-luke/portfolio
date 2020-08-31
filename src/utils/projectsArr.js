// img imports
import jeepthings from '../assets/projects/jeepthings.jpg'
import jeepthingsCover from '../assets/projects/jeepthingsCover.jpg'
import calculator from '../assets/projects/calculator.jpg'
import calculatorCover from '../assets/projects/calculatorCover.jpg'
import notepad from '../assets/projects/notepad.jpg'
import notepadCover from '../assets/projects/notepadCover.jpg'
import junkedup from '../assets/projects/junkedup.jpg'
import junkedupCover from '../assets/projects/junkedupCover.jpg'
import helo from '../assets/projects/helo.jpg'
import heloCover from '../assets/projects/heloCover.jpg'
import starWarsQuotes from '../assets/projects/StarWarsQuotes.jpg'
import starWarsQuotesCover from '../assets/projects/StarWarsQuotesCover.jpg'

export default [
  {
    image: jeepthings,
    coverImage: jeepthingsCover,
    link: 'http://www.jeepthingsapp.com/#/',
    github: 'https://github.com/malinowskil123/jeepthings',
    title: 'JeepThings',
    text: `A marketplace app for jeep lovers and rebuilders to trade, sell, and buy auto parts. Users can filter parts by keywords and sort them by price. This app utilizes google’s map api to show users where a part is located. Users also receive welcome and update emails as well as emails from other users regarding the parts they posted for sale.`,
  },
  {
    image: notepad,
    coverImage: notepadCover,
    github: 'https://github.com/malinowskil123/java-swing-notepad',
    title: 'NotePad',
    text: `A desktop notepad application developed using Java. Users are able to create, overwrite and save txt files locally on their computer. This app features a traditional edit section with copy, paste, cut, undo and redo actions. Entered text is proecessed to get word count and sentence count values along with a few other metrics which feed into a text complexity algorithm which outputs a Flesch text complexity score.`,
  },
  {
    image: calculator,
    coverImage: calculatorCover,
    link: 'https://calculator-js-lm.herokuapp.com/',
    github: 'https://github.com/malinowskil123/calculator',
    title: 'Calculator',
    text: `A web-based alternative for a traditional calculator. Users are able to enter and calculate simple mathematical expressions. Entered values are validated and if an error is detected a syntax error pop-up is displayed.`,
  },
  {
    image: junkedup,
    coverImage: junkedupCover,
    github: 'https://github.com/malinowskil123/junked-up',
    title: 'JunkedUp',
    text: `JunkedUp simplifies the process of keeping track of the news related to stocks that you follow. Now you won't miss any big company press releases related to any of your stocks in your portfolio.`,
  },
  {
    image: helo,
    coverImage: heloCover,
    github: 'https://github.com/malinowskil123/helo',
    title: 'Helo',
    text: `A simple social media application, which allows users to create profiles, post blogs, and interact with other user’s posts. Users are also able to filter posts by keywords and post id's to find their own posts.`,
  },
  {
    image: starWarsQuotes,
    coverImage: starWarsQuotesCover,
    github: 'https://github.com/malinowskil123/quote-generator',
    title: 'Star Wars Quotes Generator',
    text: `Get random quotes from various Star Wars Heroes and Villains. If you like the quote you get, you can tweet it via twitter's api.`,
  },
]
