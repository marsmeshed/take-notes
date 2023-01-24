const express = require('express');

const apiRoutes = require('./routes/apiroutes')

const htmlRoutes = require('./routes/htmlroutes')


const app = express()

//middlewares
app.use(express.static("public"));

app.use(express.urlencoded({extended: false}))

app.use(express.json());

app.use('/api', apiRoutes)

app.use('/', htmlRoutes)


app.listen(3001, () => {
  console.log("Server is running on PORT 3001!")
})
