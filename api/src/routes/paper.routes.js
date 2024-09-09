import express from "express";
const router = express.Router();



// import controllers/Md
import { isChecker, isStudent, verifyJWT } from "../middlewares/auth.middleware.js"
import { checkAnswers, parsePdf, pdfUploader } from "../controllers/paper.controlllers.js";
import { upload } from "../middlewares/multer.middlewares.js";



// API route
router.route("/upload").post(
    verifyJWT, isStudent,
    upload.fields([
        {name: "pdf", maxCount: 1},
    ]), 
    pdfUploader
);
router.post('/upload-pdf', verifyJWT, isStudent, upload.single('file'), parsePdf);
router.post('/check-answers', verifyJWT, isChecker, checkAnswers);


export default router;