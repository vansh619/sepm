var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const path = require("path")
require("./db/conn")

const port = process.env.PORT||3000;

const app = express()

const Register = require("./models/registers")

const static_path = path.join(__dirname,"../public")

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended:true
}))


app.listen(port,() =>{
    console.log(`Listening on PORT ${port}`);
});

app.get("/",(req,res)=>{
    res.render(index);
})

app.get("/register",(req,res)=>{
    res.render("render");
})

app.post("/register", async(req,res)=>{
        try{
            const password = req.body.password;
            const cpassword= req.body.confirmpassword;
    
            if(password==cpassword){
                const registerE = new Register({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    confirmpassword:req.body.confirmpassword 
                })
                const registered = registerE.save();
                res.status(201).render(index)
            }
            else{
                res.send("password are not matching");
            }
        }
        catch(error){   
        }
    })

// app.use(bodyParser.json())
// app.use(express.json());
// app.use(express.urlencoded({extended}))
app.use(express.static(static_path))
// app.use(bodyParser.urlencoded({
//     extended:true
// }))

// mongoose.connect('mongodb://localhost:27017/admin',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// var db = mongoose.connection;

// db.on('error',()=>console.log("Error in Connecting to Database"));
// db.once('open',()=>console.log("Connected to Database"))

// app.post("/sign_up",(req,res)=>{
//     var name = req.body.name;
//     var email = req.body.email;
//     var password = req.body.password;

//     var data = {
//         "name": name,
//         "email" : email,
//         "password" : password
//     }

//     db.collection('users').insertOne(data,(err,collection)=>{
//         if(err){
//             throw err;
//         }
//         console.log("Record Inserted Successfully");
//     });

//     return res.redirect('signup_success.html')

// })


// app.get("/",(req,res)=>{
//     res.render(index);
// })

// app.post("/register", async(req,res)=>{
//     try{
//         const password = req.body.password;
//         const cpassword= req.body.confirmpassword;

//         if(password==cpassword){
//             const registerE = new Register({
//                 name:req.body.name,
//                 email:req.body.email,
//                 password:req.body.password,
//                 confirmpassword:req.body.confirmpassword 
//             })
//             const registered = registerE.save();
//             res.status(201).render(index)
//         }
//         else{
//             res.send("password are not matching");
//         }
//     }
//     catch(error){

//     }
// })

// console.log("Listening on PORT 3000");
