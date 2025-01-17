const express = require('express')
const { Authentication } = require('./routes')
const app = express()
const port = 3000
const env=require('dotenv')
env.config()
const connectToDB = require('./config/db')
const morgan = require('morgan')
const { errorConverter, errorHandler } = require('./middlewares/error');
const httpStatus=require('http-status')
const ApiError = require('./utils/ApiError')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/v1',Authentication)

app.use((req, res, next) => {
    next(new ApiError(httpStatus.status.NOT_FOUND, 'Not found'));
  });
  
  
  // convert error to ApiError, if needed
  app.use(errorConverter);
  
  // handle error
  app.use(errorHandler);

//db
connectToDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
