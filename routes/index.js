const express   =   require("express");
const User      =   require("../models/User");
const Hall      =   require("../models/Hall"); 
const router    =   express.Router();
const {ensureAuthenticated} =   require("../config/auth");


router.get("/",(req,res)=>{
    res.render("welcome");
});

router.get("/dashboard",ensureAuthenticated,(req,res)=>{
    //Get all Halls from the db
	Hall.find({},(err,allHalls)=>{
		if(err){
			console.log(err);
		}
		else{
			res.render("dashboard",{halls : allHalls, currentUser : req.user.name});
		}
	});
    
});


router.get("/dashboard/:id",(req,res)=>{
	//find the hall with the provided id.
	Hall.findById(req.params.id,(err,foundhall)=>{
		if(err)
			console.log(err);
		else
			{
				console.log(foundhall);
				//render show template with that hall.
				res.render("show",{hall:foundhall});
			}
	});	
});

module.exports  =   router;