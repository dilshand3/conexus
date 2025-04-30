import { Router } from "express";
import { signUp, login, shareUser, logout, completeProfile, uploadTempAvatar, addFriend, acceptFriend } from "../controller/user.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { upload } from "../middlewares/multer.middleware";
const router = Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/shareuser").get(verifyToken, shareUser);
router.route("/logout").get(verifyToken, logout);
router.route("/completeprofile").post(verifyToken, completeProfile);
router.route("/uploadtempavatar").post(verifyToken, upload.single("avatar"), uploadTempAvatar)
router.route("/sendReq/:friendId").get(verifyToken, addFriend);
router.route("/acceptReq/:friendId").get(verifyToken, acceptFriend)

export default router;