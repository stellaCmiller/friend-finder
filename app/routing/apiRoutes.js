const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/friends", function(req, res) {
    res.send("Yeet");
});

app.post("/api/friends", function(req, res){
    const results = req.body;
    return res.json(results);
})

module.exports = app;