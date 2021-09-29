const app = require("express")()
    
app.get("/", (request, response, next) => {
  console.log(request)
  response.send("received!")
  //next()
})

const port = 3030
app.listen(port, () => console.log(`Proxy listening on port ${port}.`))

/*
app.use("proxy-to/:param", createProxyMiddleware({
  target: `https://example.com`,
  changeOrigin: true,
  pathRewrite: {
    [`^/:param`]: "",
  }
}))

//proxy endpoint:
app.use("/search", createProxyMiddleware({
  target: "https://google.com",
  changeOrigin: true,
  pathRewrite: {
    [`^/search`]: "",
  }
}))

app.use("/image", createProxyMiddleware({
  target: "https://source.unsplash.com/random",
  changeOrigin: true,
  pathRewrite: {
    [`^/image`]: '',
  }
}))
*/