const  express  = require("express"),
	   mongoose = require("mongoose"),
       User     = require("./models/User"),
       Hall     = require("./models/Hall");

       //mongoose connect and config 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/halldb");

var seeds = [
    {
        name: "LHC Seminar Hall 1: 115 Seating Capacity", 
        image: "https://www.selectyouruniversity.com/images/courses/engineering/ramaiah-institute-of-technology/auditorium-of-ramaiah-institute-of-technology.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "LHC Seminar Hall 2: 115 Seating Capacity", 
        image: "https://www.selectyouruniversity.com/images/courses/engineering/ramaiah-institute-of-technology/auditorium-of-ramaiah-institute-of-technology.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Apex Auditorium", 
        image: "https://www.selectyouruniversity.com/images/courses/engineering/ramaiah-institute-of-technology/auditorium-of-ramaiah-institute-of-technology.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];

//aSynchronous seedDB()

async function seedDB()
{
    try{

        await Hall.deleteMany({});
        console.log("Halls removed");
        
        for(const seed of seeds)
        {
            let hall = await Hall.create(seed);
            console.log("Halls created");
            hall.save();
            console.log("Halls created");
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = seedDB;

