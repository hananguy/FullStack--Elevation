const http = require('http')

const server = http.createServer(function (request, response) {
      if (request.method !== "GET") {
        response.statusCode = 405; // Method Not Allowed
        response.setHeader("Content-Type", "text/plain");
        return response.end("Method Not Allowed");
      }

    response.setHeader('Content-Type', 'text/plain')
    response.statusCode = 200;
    if(request.method === "GET")
    {
        if(request.url === "/")
        {
            response.write('Welcome to my server!')
        }
        else if(request.url === "/about")
        {
            response.write(`This is the about page`)
        }
        else if(request.url === "/contact")
        {
            response.setHeader('Content-Type', 'application/json')
            response.write(JSON.stringify({
                name: "Guy Hanan",
                phone: "054-2562685",
                city: "Petah tikva",
                job: "Fullstack developer"
            }))
        }
        else
        {
            response.statusCode = 404;
            response.write(`404 - Page not found`)
        }
    }  

    response.end();
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
