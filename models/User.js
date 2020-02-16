const mongoose  =   require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type        :  String,
        required    :   true
    },
    email : {
        type        :   String,
        required    :   true
    },
    password : {
        type        :   String,
        required    :   true
    },
    eventName : {
        type        :   String,
        required    :   true
    },

    eventRequired : {
        type        :   String
    }
});
const User  =   mongoose.model("User",userSchema);
module.exports  =  User;