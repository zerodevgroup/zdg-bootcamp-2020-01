const omdbClient = require('omdb-client')

class AppRoutes {
  static getRoutes(app, router) {
    // Status
    router.get("/status", (request, response) => {
      response.json({
        status: "OK"
      })
    })
    
    // Search movie by title/year
    router.post("/search/movie", (request, response) => {
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

    // Search movie by title/year
    router.post("/search/id", (request, response) => {
      let parameters = {
        apiKey: "b0bebbfe",
        id: request.body.id,
      }
    
      omdbClient.get(parameters, (error, data) => {
        response.json(data)
      })
    })
    
  }
}

module.exports = AppRoutes