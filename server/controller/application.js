const mongoose= require("mongoose")
const Posts = require("../model/appModel")



const getAllPosts=async (req,res)=>{
    const posts = await Posts.find()
    res.status(200).json(posts)

}
// get post by id
const getPostById=async (req,res)=>{
    const postId = req.params.id
    const post = await Posts.findById(postId)
    res.status(200).json(post)
}   
// delete post by id
const deletePostById=async (req,res)=>{
    const postId = req.params.id
    const post = await Posts.findByIdAndDelete(postId)
    res.status(200).json(post)
    }
const createPost= async (req,res)=>{
    const {name,message,email,number,years,companie}=req.body
    try{
        const appli= await Posts.create({name,message,email,number,years,companie})
        res.status(200).json(appli)
    }catch(error){
        res.status(500).json({error:error.message})
        console.log({error:error.message})
    }
   
}

module.exports={
    // export the functions
    getAllPosts,
    getPostById,
    createPost,
    deletePostById
}