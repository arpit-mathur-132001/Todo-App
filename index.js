if(process.env.NODE_ENV!=="production"){
  require("dotenv").config();
}

const express=require("express");
const app=express();
const path=require("path");

const mongoose=require("mongoose");
const Todo=require("./models/todo");
const dbUrl=process.env.DB_URL || 'mongodb://localhost:27017/myTodo';
// mongoose.connect(dbUrl)
mongoose.connect(dbUrl)
  .then(()=>{
    console.log("Connection Open");
  })
  .catch(err=>{
    console.log(`Error ${err}`)
  })

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,"/public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/",async (req,res)=>{
  const todos=await Todo.find({})
  res.render("todo",{todos})
}) 

app.post("/",async(req,res)=>{
  const newTodo=new Todo(req.body);
  await newTodo.save();
  res.redirect(`/`)
})

app.post("/:id",async(req,res)=>{
  const {id}=req.params;
  await Todo.findByIdAndDelete(id);
  res.redirect("/");
})

const port=process.env.PORT||3000;
app.listen(port,()=>{
  console.log(`App is listening on port ${port}`);
})
