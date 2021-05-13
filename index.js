import express from 'express'
import cors from 'cors'
import path from 'path'

const application = express()

// middleware
// React Build
application.use(express.static(path.join(__dirname, 'build')))
// Cross Origin
application.use(
  cors({
    credentials: true,
    methods: ['GET'],
    maxAge: 84600,
  })
)

// if we hit not-found re-direct on the front-end then send build index.html file
application.get('*', (request, response) =>
  response.sendFile('index.html', {
    root: path.join(__dirname, './build/'),
  })
)

application.use((request, response, next) => {
  if (process.env.NODE_ENV === 'production') {
    response.setHeader(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubdomains; preload'
    )
  }
  next()
})

const PORT = process.env.PORT || 3000

application.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`server listening on: ${PORT}`)
  }
})
