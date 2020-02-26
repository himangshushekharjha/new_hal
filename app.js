const express               =   require("express");
const expressLayouts        =   require("express-ejs-layouts");
const mongoose              =   require("mongoose");
const flash                 =   require("connect-flash");
const session               =   require("express-session");
const passport              =   require("passport");
const app                   =   express();                 
const PORT                  =   process.env.PORT || 5000;
const seedDB                =   require("./seed");         

//Passport config
require("./config/passport")(passport);


//mongoose connect and config 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/halldb");

//body-parser
app.use(express.urlencoded({extended : false}));

//For css
app.use(express.static(__dirname+"/public"));

//Express Session(Middleware)
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Middleware for connect flash
app.use(flash());

//Global variables
app.use((req,res,next)=>
{
    //res.locals.success_msg  =  
    res.locals.success_msg  =  req.flash("success_msg");
    res.locals.error_msg    =  req.flash("error_msg");
    res.locals.error        =  req.flash("error");
    next();
});

//EJS
app.use(expressLayouts);
app.set("view engine","ejs");

seedDB();

//Routes
app.use("/",require("./routes/index"));
app.use("/dashboard",require("./routes/index"));
app.use("/users",require("./routes/users"));
app.use("/dashboard/:id",require("./routes/index"));


app.listen(PORT,console.log(`Server started on port ${PORT}`));