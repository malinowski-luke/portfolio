import dotenv from 'dotenv'
import express from 'express'
import router from './router'
import morgan from 'morgan'
import responseTime from 'response-time'
import cors from 'cors'

dotenv.config({})

const application = express()

// react build
if (process.env.ENVIRONMENT === 'production') {
  application.use(express.static(`${__dirname}/../build`))
}
// assets
application.use('/assets', express.static(`${__dirname}/assets`))

// Logging
application.use(morgan('short'))
// Response time Logging
application.use(responseTime())

// Post Request Body Parsing
application.use(express.urlencoded({ extended: true }))
application.use(express.json())

// Cross Origin
application.use(
  cors({
    credentials: true,
    origin: [process.env.BACKEND_URI],
    methods: ['POST', 'GET'],
    maxAge: 84600,
  })
)

application.use(router)

application.listen(process.env.PORT, () => {
  console.log('=====================================')
  console.log(`server listening on: ${process.env.PORT}`)
  console.log('=====================================')
})
