const mongoose  =   require("mongoose");

const hallSchema = new mongoose.Schema({
    name : {
        type        :  String,
        required    :   true
    },
    
    bookedOn : {
        type        :   Date,
        default     :   Date.now
    },

    bookedFor : {
        type        :   {   date : Date,
                            time : String    
                        }, 
        
        isBooked    :   Boolean
    }
});
const User  =   mongoose.model("Hall",userSchema);
module.exports  =  User;