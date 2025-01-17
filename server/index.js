const express = require('express')
const { Authentication } = require('./routes')
const app = express()
const port = 3000
const env=require('dotenv')
env.config()
const connectToDB = require('./config/db')
const morgan = require('morgan')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware
app.use(morgan('dev'))
app.use('/api/v1',Authentication)


//db
connectToDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
