const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const app = express()
const port = 3000
const points = [0, 0]

app.use(express.static("client"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())

app.get("/api/user_points", (req, res) => {
    res.send({
        points: points
    })
})

app.post("/api/user_points", (req, res) => {
    console.log(req.body)
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
