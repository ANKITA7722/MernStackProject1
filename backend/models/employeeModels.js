const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    rollno:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:false
    },
    fees:{
        type:Number,
        require:true
    }
   
})
module.exports = mongoose.model("employee",empSchema)