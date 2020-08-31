require
const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 9000

app.use(express.static(`${__dirname}/../build`))

app.listen(PORT, () => console.log(`server running on: ${PORT}`))
