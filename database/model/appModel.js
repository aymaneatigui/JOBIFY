const mongoose = require("mongoose")


const Schema = mongoose.Schema

const appShema= new Schema({
    name:{type:String,required:true},
    message:{type:String,required:true},
    email:{type:String,required:true},
    number :{type:String,required:true},
    years :{type:String,required:true},
    companie:{type:String,required:true}
},{timestamps:true})



module.exports= mongoose.model("applications",appShema)