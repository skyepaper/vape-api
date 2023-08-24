const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ServerStartSchema=new Schema({
   
    start:{
        type:Number,
        default:0
    },
   
})

const ServerStart=mongoose.model("ServerStart", ServerStartSchema);
module.exports=ServerStart;