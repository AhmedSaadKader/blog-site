import { Router } from "express";
import { createPost, deletePost, getAllPosts, showStats, updatePost } from "../controllers/postsController.js";

const router = Router();

router.route("/").post(createPost).get(getAllPosts);
router.route("/stats").get(showStats);
router.route("/:id").delete(deletePost).patch(updatePost);

export default router;
