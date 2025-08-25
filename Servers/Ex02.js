
//id name email
const users =[
    {
        id: "208748376",
        name: "Guy",
        email: "yhananguy@gmail.com"
    },
    {
        id: "028775583",
        name: "Tali",
        email: "tali2877@walla.com"
    }
]

const FindUserByID = (id) =>
{
    let result = null;

    for (const user of users) 
    {
        if (Number(user.id) === id)
        {
            result = user;
            break;
        }
    }

    return result;
}

const http = require('http')
const url = require('url')

const server = http.createServer(async function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if(request.method === "GET")
    {
        if(request.url === "/api/users")
        {
            response.write(JSON.stringify(users))
        }

        else if (request.url.startsWith("/api/users/")) {
        const parts = request.url.split("/");   // ["", "api", "users", "123"]
        const id = Number(parts[3]);  
        response.write(JSON.stringify(FindUserByID(id)));
        console.log(FindUserByID(id))
        }
    }
    else if(request.method === "POST")
    {
        if(request.url === "/api/users")
        {
            const newUser = await readBody(request);
        
            if (newUser && newUser.id && newUser.name && newUser.email) 
            {
                newUser.id = users[users.length - 1].id + 1;
                users.push(newUser);
                response.write(JSON.stringify(newUser));
            }
            else 
            {
                response.statusCode = 400;
                response.write(JSON.stringify({ error: "body must include content prop" }));
            }
        }
       
    }
    response.end();
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})



function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
}