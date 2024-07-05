const express = require("express")
const morgan = require("morgan")
const { createProxyMiddleware } = require("http-proxy-middleware")



const  { PORT } = require("./config/serverConfig")

const app = express()

app.use(morgan('combined'))

app.use(
    '/bookingservice',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
    }),
  );

app.get("/home", (req, res) => {
    return res.status(200).json({
        message: "Home Route"
    })
})

const setupAndStart = () => {
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`)
    })
}

setupAndStart()