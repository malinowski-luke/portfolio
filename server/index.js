const express = require('express')
const projects = require('./data/projects.json')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 9000

app.use(express.static(`${__dirname}/../build`))

app.use('/images', express.static(`${__dirname}/assets`))

app.get('/projects', (req, res) => {
  res.status(200).send(projects)
})

app.get('/projects/:project_title', (req, res) => {
  const projectTitle = req.params.project_title

  const projectData = projects.find((project) => project.title === projectTitle )

  if(!projectData){
    return res.status(404).send(`Project ${projectTitle} not found.`)
  }

  res.status(200).send(projectData)
})

app.get('/stack', (req, res) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
  let icons = fs.readdirSync(__dirname + '/assets/icons')

  if (icons.length >= 1) {
    icons = icons.map((icon) => {
      let title = icon.replace('.png', '')

      if (title.split(' | ').length > 1) {
        title = title
          .split(' | ')
          .map((word) => capitalize(word))
          .join(' | ')
      } else {
        title = capitalize(title)
      }

      return {
        img: `/images/icons/${icon}`,
        title,
      }
    })
  }

  res.status(200).send(icons)
})

app.listen(PORT, () => console.log(`server running on: ${PORT}`))
