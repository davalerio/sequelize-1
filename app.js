const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// router import
const user = require('./routes/user')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routing
app.use('/api/v1', user)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to aplication." })
})

// set port, listen for request
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})