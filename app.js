const dotenv = require("dotenv")
dotenv.config() // process.env.KEY
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const app = express()
const port = 3000
const points = [0, 0]
const pw = process.env.PW

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
}, (req, res) => {
    points[req.body["user"]] += parseInt(req.body["points"])
    res.send()
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

