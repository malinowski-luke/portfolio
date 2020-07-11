require
const express = require('express'),
  app = express(),
  { PORT } = process.env //heroku

app.use(express.static(`${__dirname}/../build`))

app.listen(PORT || 4420, () =>
  console.log(`server running on: ${PORT || 4420}`)
)
