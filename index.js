import express from 'express'
import cors from 'cors'
import path from 'path'

const application = express()

// React Build
application.use(express.static(path.join(__dirname, 'build')))
// if we hit not-found re-direct on the front-end then send build index.html file
application.get('*', (request, response) =>
  response.sendFile('index.html', {
    root: path.join(__dirname, './build/'),
  })
)

// Cross Origin
application.use(
  cors({
    credentials: true,
    methods: ['GET'],
    maxAge: 84600,
  })
)

const PORT = process.env.PORT || 3000

application.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      `===================================== \nserver listening on: ${PORT} \n=====================================`
    )
  }
})
