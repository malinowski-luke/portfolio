import shuffle from '../utils/shuffle'

import jeepthings from '../assets/projectImages/jeepthings.jpg'
import devQuiz from '../assets/projectImages/devQuiz.gif'
import notepad from '../assets/projectImages/notepad.jpg'

import jeepthingsCover from '../assets/projectImages/jeepthingsCover.jpg'
import devQuizCover from '../assets/projectImages/devQuizCover.jpg'
import notepadCover from '../assets/projectImages/notepadCover.jpg'

const useAllProjects = () => {
  return shuffle([
    {
      image: jeepthings,
      coverImage: jeepthingsCover,
      github: 'https://github.com/malinowskil123/jeepthings',
      title: 'jeepthings',
      text: "A web app for Jeep lovers and rebuilders to trade, sell, and buy auto parts. Contains a fully working CRUD operations. Users have the ability to filter parts by a keyword and sort them by price. Jeepthings integrates google maps api to show a part's location on a map. Users also receive welcome and update emails as well as emails from other users regarding the parts they posted.",
      stack: [
        'node / express / postgres',
        'react(Hooks) / redux',
        'sass / bootstrap',
      ],
    },
    {
      image: devQuiz,
      coverImage: devQuizCover,
      link: 'https://dev-quiz.herokuapp.com/',
      github: 'https://github.com/malinowskil123/dev-quiz',
      title: 'devquiz',
      text: 'Test your JavaScript and Front-End knowledge with Dev Quiz: a web based quiz app, built to test your front-end skill. Users are able to pick a quiz from a variety of Front-End focused subjects. Users also have the ability to toggle styling from light mode to dark mode.',
      stack: ['react (Hooks)', 'node / express'],
    },
    {
      image: notepad,
      coverImage: notepadCover,
      github: 'https://github.com/malinowskil123/calculator',
      title: 'notepad',
      text: 'A desktop notepad application developed using Java. Users are able to create, overwrite and save txt files locally on their computer. This app features a traditional edit section with copy, paste, cut, undo and redo actions. Entered text is proecessed to get word count and sentence count values along with a few other metrics which feed into a text complexity algorithm which outputs a Flesch text complexity score.',
      stack: ['java', 'jswing'],
    },
  ])
}

export default useAllProjects
