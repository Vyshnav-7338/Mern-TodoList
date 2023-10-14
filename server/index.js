const express =require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const TodoModel = require('./Models/TodoModel')

const app =express()
app.use(express.json())
app.use(cors())

 mongoose.connect('mongodb://127.0.0.1:27017/Todolist')

 app.post('/taskAdd',(req,res)=>{
    const task =req.body.task;
    TodoModel.create({
        task:task
    })
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
 })
 app.get('/getTodo',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
 })

 app.put('/update/:id',(req,res)=>{
    const {id} =req.params;
    TodoModel.findByIdAndUpdate({_id:id},{Status:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
 })
 app.delete('/delete/:id',(req,res)=>{
    const {id} =req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
 })

app.listen(3001,()=>{
    console.log('Server is Running')
})