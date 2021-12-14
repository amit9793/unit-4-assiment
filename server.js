
const express = require("express");
const connect = require("./src/configs/db");

const userController=require('./src/controllers/user.controller')
const galleryController=require('./src/controllers/gallery.controller')
const app=express();
app.use('/user',userController)
app.use('/gallery',galleryController)
app.use(express.json());


app.listen(3000, async function () {
  await connect();
  console.log("Port is Running Again." );
});
