import path from 'path'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config({})

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'build')))

app.get('/healthcheck', (req, res) => {
  res.send('OK').status(200)
})

const server_env = process.env.NODE_ENV.toUpperCase()
app.listen(PORT, () => console.log(`${server_env} Server running on: ${PORT}`))
