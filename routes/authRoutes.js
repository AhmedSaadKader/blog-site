import { Router } from "express";
import { register, updateUser, login } from "../controllers/authController.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);

export default router;
