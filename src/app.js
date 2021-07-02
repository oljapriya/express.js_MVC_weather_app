
const path = require('path')
//import express package that we installed using npm
const express = require('express');

const router = require("./router")

//this line initializes our expess application
//to initiallizes our express app we've created our new const and we've set its value to express()function.
//express functin had bunch of properties and methods that we could use in this file. One of these properties is get function bellow. 
const app = express()

//express configuration
app.use(express.urlencoded({ extended: false }))
//this function will convert any incoming json data
app.use(express.json()) 
//this function is telling express to gain all access to everything in public folder 
app.use(express.static("public"))
//views function that could be viewed with view engine like handlebars 
app.set("views", "views")
//this functon tells express to use handlebar engine
app.set("view engine", "hbs")


app.use("/", router)



//app.listen function tell the server to start listening for connections on the particular port on your computer
app.listen(3000, () => {
 console.log('The server is now running on port 3000!')
});
