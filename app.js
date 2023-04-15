const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const app = express()
const port = 3000
const points = [0, 0]
const pw = "blubb"

app.use(express.static("client"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())

app.get("/api/user_points", (req, res) => {
    res.send({
        points: points
    })
})

app.post("/api/user_points", (req, res, next) => {
    if(req.body.password === pw)  {
        next()
    } else {
        res.status(403).send()
    }
}, (req) => {
    points[req.body["user"]] += parseInt(req.body["points"])
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

