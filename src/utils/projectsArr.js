// img imports
import jeepthings from '../assets/projects/jeepthings.jpg'
import calculator from '../assets/projects/calculator.jpg'
import notepad from '../assets/projects/notepad.jpg'
import junkedup from '../assets/projects/junkedup.jpg'
import helo from '../assets/projects/helo.jpg'
import jeepthingsCover from '../assets/projects/jeepthingsCover.jpg'
import calculatorCover from '../assets/projects/calculatorCover.jpg'
import notepadCover from '../assets/projects/notepadCover.jpg'
import junkedupCover from '../assets/projects/junkedupCover.jpg'
import heloCover from '../assets/projects/heloCover.jpg'

export default [
  {
    image: jeepthings,
    coverImage: jeepthingsCover,
    link: 'http://www.jeepthingsapp.com/#/',
    github: 'https://github.com/malinowskil123/jeepthings',
    title: 'JeepThings',
    text: `A marketplace for jeep lovers and rebuilders to trade, sell, and buy auto parts. Users can filter parts by keywords and sort them by price. This app also utilizes the google maps api to show users where a part is located on a map. Users also receive welcome and update emails as well as emails from other users regarding the parts they posted.`,
  },
  {
    image: notepad,
    coverImage: notepadCover,
    github: 'https://github.com/malinowskil123/java-swing-notepad',
    title: 'NotePad',
    text: `A fun pet project that aimed to build a Java text editor similar to a notepad application. User can create, overwrite and save .txt files on their computer. It includes a fully functioning edit section with copy, paste, cut, undo and redo functions. This app also tracks your word count and sentence count along with a few other metrics and feeds into a alogrithm which outputs a Flesch text complexity score`,
  },
  {
    image: calculator,
    coverImage: calculatorCover,
    link: 'https://calculator-js-lm.herokuapp.com/',
    github: 'https://github.com/malinowskil123/calculator',
    title: 'Calculator',
    text: `Instead of using your smart-phones calculator, now there's a web alternative. Takes in simple arithmetic and alos checks your input for syntax errors. This app was developed using JavaScript, jQuery, Html, and Css`,
  },
  {
    image: junkedup,
    coverImage: junkedupCover,
    // link: 'http://www.junkedupstock.com/#/',
    github: 'https://github.com/malinowskil123/junked-up',
    title: 'JunkedUp',
    text: `JunkedUp simiplifies the process of keeping track of the news related to stocks that you follow. Now you won't miss any big company press release related to any of your stocks in your portfolio.
    `,
  },
  {
    image: helo,
    coverImage: heloCover,
    github: 'https://github.com/malinowskil123/helo',
    title: 'Helo',
    text: `Helo is a social media app, which allows users to create profiles, post blogs, and interact with other users posts. Users can also filter posts by a keyword and post id's to find their own posts`,
  },
]
