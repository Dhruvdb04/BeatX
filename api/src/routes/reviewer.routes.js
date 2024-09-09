import express from "express";
const router = express.Router();



// import controllers
import { assignPaper, getUnassignedPapers, submitFeedback } from "../controllers/reviewer.controllers.js";



// API route
// Route to get unassigned papers
router.get('/unassigned', getUnassignedPapers);

// Route to assign a paper to a reviewer
router.put('/assign/:paperId', assignPaper);

// Route to submit feedback for a paper
router.post('/feedback/:paperId', submitFeedback);





export default router;




