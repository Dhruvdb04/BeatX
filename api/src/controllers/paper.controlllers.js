import { Paper } from "../models/paper.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"; 
import { uploadOnCloudinary } from "../utils/coudinary.js";
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { compareAnswers, createVectorSnapshot, getCorrectAnswerVector } from "../utils/GaianetService.js"


const pdfUploader = asyncHandler(async(req,res)=>{
    const { subject } = req.body;
    const userId = req.user._id;

    // Upload paper to Cloudinary
    try{
        const fileUrl = await uploadOnCloudinary(req.files?.pdf[0]?.path);
        console.log("file Url : ", fileUrl);
    // Create paper record
    const newPaper = new Paper({
        userId,
        fileUrl,
        subject,
        status: 'submitted',
      });
  
      await newPaper.save();
      return res.status(200).json(
          new ApiResponse(
              200,
              "Paper uploaded successfully",
              newPaper
          )
      )
    }
    catch(err){
        console.log(err);
        return res.status(500).json(
            new ApiError(500, "Internal server error")
        )
    }
})




const parsePdf = asyncHandler(async(req,res)=>{
    const pdfFilePath = req.files?.pdf[0]?.path;

    try {
        // Read and convert the PDF to text
        const dataBuffer = fs.readFileSync(pdfFilePath);
        const pdfData = await pdfParse(dataBuffer);
        const markdown = pdfData.text;

        // Create a vector snapshot using GaiaNet
        const vector = await createVectorSnapshot(markdown);

        res.json({ success: true, vector });
    }
    catch(error){
        console.error('Error processing PDF:', error.message);
        res.status(500).json({ success: false, message: 'Failed to process PDF' });
    }
    finally{
        fs.unlinkSync(pdfFilePath);
    }
    
})


// Compare answers
const checkAnswers = asyncHandler(async(req,res) => {
    const { uploadedVector } = req.body;

    try{
        // Retrieve stored correct answer vectors
        const correctAnswerVector = await getCorrectAnswerVector();

        // Compare the vectors
        const similarity = await compareAnswers(uploadedVector, correctAnswerVector);

        // Determine feedback based on similarity score
        let feedback = 'Needs Improvement';
        if(similarity > 0.8){
            feedback = 'Great Job!';
        } 
        else if(similarity > 0.5){
            feedback = 'Good, but can be improved!';
        }

        res.json({ success: true, feedback, similarity });
    }
    catch(error){
        console.error('Error checking answers:', error.message);
        res.status(500).json({ success: false, message: 'Failed to check answers' });
    }
})




export { 
    pdfUploader,
    parsePdf,
    checkAnswers

};