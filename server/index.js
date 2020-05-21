const express = require('express'),
  app = express(),
  { PORT } = process.env

app.use(express.static(`${__dirname}/../build`))

app.listen(PORT || 4420, () =>
  console.log(`server running on: ${PORT || 4420}`)
)
