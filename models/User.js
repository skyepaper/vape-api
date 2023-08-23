const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
   
    name:{
        type:String,
        default:''
    },
    pass:{
        type:String,
        default:''
    },
    lastLogin:{
        type:String,
        default:function(){return new Intl.DateTimeFormat('en-us',{
            dateStyle:'medium',
            timeStyle:'short',
            timeZone: 'EET'
        }).format(new Date())}
    },
    numLogin:{
        type:Number,
        default:99
    }
   
})

const User=mongoose.model("User", UserSchema);
module.exports=User;