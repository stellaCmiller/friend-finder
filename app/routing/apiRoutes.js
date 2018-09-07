const express = require('express');
const app = express();

app.get("/api/friends", function(req, res) {
    res.send("Yeet");
});

module.exports = app;