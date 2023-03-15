import  express from "express";
import { getPost } from "../controllers/posts.js";

const router = express.Router();

// get post
router.get("/",getPost)

export default router