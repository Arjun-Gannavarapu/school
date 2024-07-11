const task=require('../models/Task')
const asyncWrapper=require('../middleware/async')
const Task = require('../models/Task')
const getAllTasks=async(req,res)=>{
    const tasks=await Task.find({})
    res.status(200).json({task})
}
const createTask=async(req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({task})
}
const getTask=async(req,res,next)=>{
    const{id:taskID}=req.params
    const task=await Task.findone({_id:taskID})
    if(!task){
        return next(createCustomError(`no task with id:${taskID}`,404))
    }
    res.status(201).json({task})
}

const deleteTask=async(req,res,next)=>{
    const {id:taskID}=req.params
    const task=await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return next(createCustomError(`no task with id:${taskID}`,404))
    }
    res.status(201).json({task})
}
const updateTask=(req,res)=>{
    res.send("Update Task")
}
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}