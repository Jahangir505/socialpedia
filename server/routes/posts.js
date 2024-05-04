import express from 'express';
import {comment, getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

// Update

router.patch("/:id/like", verifyToken, likePost);
router.post("/:id/comment", verifyToken, comment);

export default router;
