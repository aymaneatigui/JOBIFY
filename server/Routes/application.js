const express = require("express")
const router = express.Router()
const Apps = require("../model/appModel")
const {
    getAllPosts,
    getPostById,
    createPost,
    deletePostById

}= require("../controller/application")

// get all post
router.get("/",getAllPosts)

router.get("/:id",getPostById)
router.post("/",createPost)
router.delete("/:id",deletePostById)

module.exports=router