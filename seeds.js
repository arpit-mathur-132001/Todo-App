const mongoose=require("mongoose");
const Todo=require("./models/todo");
mongoose.connect('mongodb://localhost:27017/myTodo')
  .then(()=>{
    console.log("Mongoose Connection Open");
  })
  .catch(err=>{
    console.log(`Error ${err}`)
  })

const t=new Todo({
  title:"Go to School",
  description:"Do the hardwork and homework"
})
t.save()
  .then(t=>{
    console.log(t);
  })
  .catch(e=>{
    console.log(e);
  })