const express = require('express')
const omdbClient = require('omdb-client')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const config = {
  mongoUrl: "mongodb+srv://admin:Test123!@movies-0dslk.mongodb.net/test?retryWrites=true&w=majority",
  database: "movies"
}

app.set("mongoUrl", config.mongoUrl)
app.set("database", config.database)

const ModelRoutes = require("./src/routes/model-routes")

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

const router = express.Router()

ModelRoutes.getRoutes(app, router)

app.use("/api", router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
