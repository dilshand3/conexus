import { Router } from "express";
import { createUrl, deleteURl, redirectUrl } from "../controller/url.controller";
const router = Router();

router.route("/createURL").post(createUrl);
router.route("/:shortUrl").get(redirectUrl);
router.route('/deleteUrl/:id').get(deleteURl);

export default router;