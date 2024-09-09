import Paper from '../models/paper.models.js';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse.js';


// Get all unassigned papers
const getUnassignedPapers = async (req, res) => {
    try {
        const unassignedPapers = await Paper.find({ status: 'submitted' });
        
        return res.status(200).json(
            new ApiResponse(
                200,
                unassignedPapers,
                'Papers retrieved successfully',
            )
        )
    } 
    catch(error){
        return res.status(500).json(
            new ApiError(500, 'Error fetching papers')
        )
    }
};



// Assign a paper to a reviewer
const assignPaper = async (req, res) => {
    try {
        const { paperId } = req.params;
        const { reviewerId } = req.body;

        const paper = await Paper.findById(paperId);
        if (!paper) {
            return res.status(404).json(
                new ApiError(404, 'Paper not found')
            )
        }

        paper.assignedReviewer = reviewerId;
        paper.status = 'assigned';
        await paper.save();

        return res.status(200).json(
            new ApiResponse(
                200,
                paper,
                'Paper assigned successfully',
            )
        )
    } 
    catch(error){
        return res.status(500).json(
            new ApiError(500, 'Error assigning paper')
        )
    }
};



// Submit feedback for a paper
const submitFeedback = async (req, res) => {
    try {
        const { paperId } = req.params;
        const { feedback, score } = req.body;

        const paper = await Paper.findById(paperId);
        if (!paper || paper.status !== 'assigned') {
            return res.status(404).json(
                new ApiError(404, 'Paper not found or not assigned to a reviewer')

            )
        }

        paper.feedback = feedback;
        paper.score = score;
        paper.status = 'reviewed';
        paper.reviewedAt = Date.now();
        await paper.save();

        return res.status(200).json(
            new ApiResponse(
                200, 
                'Feedback submitted successfully', 
                paper
            )
        )
    } 
    catch(error) {
        return res.status(500).json(
            new ApiError(500, 'Error submitting feedback')
        )
    }
};



export {
    getUnassignedPapers,
    assignPaper,
    submitFeedback
};
