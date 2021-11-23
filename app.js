const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"))


app.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/home.html")
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
 });

 app.get("/photo", (req, res) => {
    res.sendFile(__dirname + "/views/photo.html")
 });

 app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
 })

 app.get("/project1", (req, res) => {
   res.sendFile(__dirname + "/views/project1.html")
});

// Server Started
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

