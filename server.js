const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express()

//middlewares
app.use(express.static("public"));

app.use(express.urlencoded({extended: false}))

app.use(express.json());




app.get("/notes", (req, res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "UTF8", (err, data) => {
    if(err) {
      console.log("There is an error!")
      return;
    }

    const notes = JSON.parse(data)
    res.json(notes)
  })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

// post routes
app.post("/api/notes", (req, res) => {

console.log(req.body)

fs.readFile("./db/db.json", "UTF8", (err, data) => {
  if(err) {
    console.log("There is an error!")
    return;
  }

  const notes = JSON.parse(data)

  
  console.log(notes);

  notes.push(req.body);

  console.log(notes);
  // res.json(notes)

  fs.writeFile("./db/db.json", JSON.stringify(notes), () => {
    console.log("File overwritten!")

    res.send("")
  })
})



  res.send("Post route active!")
})



app.listen(3001, () => {
  console.log("Server is running on PORT 3001!")
})
