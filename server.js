const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./app/routing/apiRoutes')
const htmlRoutes = require('./app/routing/htmlRoutes')

const app = express();
const port = 8080;

app.use(apiRoutes)
app.use(htmlRoutes)

app.get("/", function(req, res) {
    res.send("Yeet");
});

app.listen(port, function() {
    console.log("App listening on PORT " + port);
});