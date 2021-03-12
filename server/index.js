import dotenv from 'dotenv'
import express from 'express'
import router from './router'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import responseTime from 'response-time'
import cors from 'cors'

dotenv.config({})

const application = express()
const PORT = process.env.PORT

// react build
application.use(express.static(`${__dirname}/../build`))
// assets
application.use('/assets', express.static(`${__dirname}/assets`))

// Logging
application.use(morgan('short'))
// Response time Logging
application.use(responseTime())

// Post Request Body Parsing
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({ extended: true }))

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

application.listen(PORT, () => {
	console.log('=====================================')
	console.log(`server listening on: ${PORT}`)
	console.log('=====================================')
})
