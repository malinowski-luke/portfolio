import path from 'path'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

dotenv.config({})

const PORT = process.env.PORT || 3000
const SERVER_ENV = process.env.SERVER_ENV || 'development'

const app = express()

// middleware
app.use(morgan('common'))

// serve front-end build
app.use(express.static(path.join(__dirname, 'build')))

app.get('/healthcheck', (req, res) => {
  res.send('OK').status(200)
})

app.listen(PORT, () => {
  if (SERVER_ENV !== 'production') {
    console.log(`${SERVER_ENV} Server running on: ${PORT}`)
  }
})
