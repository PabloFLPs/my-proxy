const express = require("express")

//obj destructuring:
const { createProxyMiddleware } = require("http-proxy-middleware")

//setting express server:
const app = express()

//configuration:
const PORT = 3000
const HOST = "localhost"

//GET information route from our proxy:
app.get("/", (request, response) => {
  response.send('This is a proxy service which proxies the client requests. Example: localhost:port/example will redirect you to example.com.')
})

app.get("/:param", (request, response, next) => {
  //response.send(request.params.param)
  response.redirect(`https://${request.params.param}.com`)
  //response.redirect(`https://proxy-to.${request.params.param}.com`)
})

//starting our proxy server:
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`)
})