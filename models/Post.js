const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const PostSchema=new Schema({
   
    text:{
        type:String,
        default:'empty'
    },
   
})

const Post=mongoose.model("Post", PostSchema);
module.exports=Post;