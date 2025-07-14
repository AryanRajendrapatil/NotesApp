const mongoose=require("mongoose")
const{Schema}=mongoose;
const noteSchema=new Schema({
    title:{
        type:String,
        requied:true,
        trim:true,

    },
    description:{
        type:String,
        requied:true,
        trim:true,

    }
},{timestamps:true})
module.exports=mongoose.model("notes",noteSchema)