const express = require('express')
const projects = require('./data/projects.json')

const app = express()
const PORT = process.env.PORT || 9000

app.use(express.static(`${__dirname}/../build`))

app.use('/images', express.static(`${__dirname}/assets`))

app.get('/projects', (req, res) => {
  res.status(200).send(projects)
})

app.get('/project/:index', (req, res) => {
  let { index } = req.params
  index = +index
  if (!projects[+index])
    return res.status(400).send(`project with index:${index} doesn't exist`)
  res.status(200).send(projects[+index])
})

app.listen(PORT, () => console.log(`server running on: ${PORT}`))
