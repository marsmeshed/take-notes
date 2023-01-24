const express = require('express');

const apiRoutes = require('./routes/apiroutes')

const htmlRoutes = require('./routes/htmlroutes')


const app = express()

const PORT = process.env.PORT || 3001

//middlewares
app.use(express.static("public"));

app.use(express.urlencoded({extended: false}))

app.use(express.json());

app.use('/api', apiRoutes)

app.use('/', htmlRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
