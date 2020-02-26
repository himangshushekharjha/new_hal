const mongoose  =   require("mongoose");


const hallSchema = new mongoose.Schema({
    name : {
        type        :  String,
        required    :   true
    },

    image : String,

    description : String,
    
    users 	: [
		{
			type : mongoose.Schema.Types.ObjectId,
			ref	 : "User"
        }
    ]
});

const Hall  =   mongoose.model("Hall",hallSchema);
module.exports  =  Hall;