const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        min:6,
        max:20,
        required:true,
        unique:true,
    
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        min:6,
        required:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    city:{
        type: String,
        max: 50,
    },
    from:{
        type: String,
        max:50
    },
    desc:{
        type: String,
        max: 50,
    },
    relationship:{
        type: Number,
        enum: [1,2,3],
    }
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema)