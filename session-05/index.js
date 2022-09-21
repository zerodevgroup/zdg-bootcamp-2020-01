const express = require('express')
const omdbClient = require('omdb-client')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use( bodyParser.json() ) // to support JSON-encoded bodies

app.use("/status", (request, response) => {
  response.json({
    status: "OK"
  })
})

app.post("/list/movie", (request, response) => {

  let parameters = {
    apiKey: "b0bebbfe",
    title: request.body.title,
  }

  if(request.body.year) {
    parameters.year = request.body.year
  }

  omdbClient.get(parameters, (error, data) => {
    response.json(data)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))