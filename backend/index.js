const express = require("express");
 const app = express();
 const mongoose = require("mongoose");

//  mongoose.connect("mongodb://127.0.0.1:27017/ankitaji").then(()=>{
//          console.log("DB succesfully Connected")
//      });
    

 app.listen(8000, () => {
    console.log(`server run on 8000 port`);
})