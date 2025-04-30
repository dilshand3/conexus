import { Router } from "express";
import { signUp, login, shareUser, logout, completeProfile, uploadTempAvatar, blockUser, removeUserBlockList,addFriend, acceptFriend, removeFriend } from "../controller/user.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { upload } from "../middlewares/multer.middleware";
const router = Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/shareuser").get(verifyToken, shareUser);
router.route("/logout").get(verifyToken, logout);
router.route("/completeprofile").post(verifyToken, completeProfile);
router.route("/uploadtempavatar").post(verifyToken, upload.single("avatar"), uploadTempAvatar);
router.route("/blockuser/:friendId").get(verifyToken, blockUser);
router.route("/removeFromBlockList/:friendId").get(verifyToken,removeUserBlockList)
router.route("/sendReq/:friendId").get(verifyToken, addFriend);
router.route("/acceptReq/:friendId").get(verifyToken, acceptFriend);
router.route("/removeFriend/:friendId").get(verifyToken, removeFriend);

export default router;