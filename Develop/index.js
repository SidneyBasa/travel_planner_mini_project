// Monday February 6 2023
// UW coding bootcamp
// Module 13 object relational model
// Sidney Basa
// root index.js

// test hold
// require("dotenv").config();

const express = require('express');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const Location = require("./models/Location")

app.get("/", (request, response)=>{
    response.send("Test at root index.js for response")
})

sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log('Application is listening on PORT' + PORT)
    });
});