const express = require('express')
const projects = require('./data/projects.json')

const app = express()
const PORT = process.env.PORT || 9000

app.use(express.static(`${__dirname}/../build`))

app.use('/images', express.static(`${__dirname}/assets`))

app.get('/projects', (req, res) => {
  res.status(200).send(projects)
})

app.get('/project/:title', (req, res) => {
  let { title } = req.params
  const project = projects.find((project) => project.title === title)
  res.status(200).send(project)
})

app.listen(PORT, () => console.log(`server running on: ${PORT}`))
