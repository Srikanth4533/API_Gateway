const express = require("express")

const  { PORT } = require("./config/serverConfig")

const app = express()

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