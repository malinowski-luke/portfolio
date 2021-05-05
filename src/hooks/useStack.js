import bootstrap from '../assets/icons/bootstrap.png'
import htmlCss from '../assets/icons/htmlCss.png'
import javascript from '../assets/icons/javascript.png'
import jest from '../assets/icons/jest.png'
import mongodb from '../assets/icons/mongodb.png'
import node from '../assets/icons/node.png'
import postgres from '../assets/icons/postgres.png'
import react from '../assets/icons/react.png'
import redux from '../assets/icons/redux.png'
import typescript from '../assets/icons/typescript.png'
import vueVuex from '../assets/icons/vueVuex.png'
import webpack from '../assets/icons/webpack.png'

import shuffle from '../utils/shuffle'

const useStack = () => {
  return shuffle([
    { title: 'Bootstrap', img: bootstrap },
    { title: 'Html | Css', img: htmlCss },
    { title: 'JavaScript', img: javascript },
    { title: 'Jest', img: jest },
    { title: 'MongoDB', img: mongodb },
    { title: 'Node.js', img: node },
    { title: 'Postgres', img: postgres },
    { title: 'React', img: react },
    { title: 'Redux', img: redux },
    { title: 'TypeScript', img: typescript },
    { title: 'Vue | Vuex', img: vueVuex },
    { title: 'Webpack', img: webpack },
  ])
}

export default useStack
