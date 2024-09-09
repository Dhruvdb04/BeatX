import axios from 'axios';

// Create a vector snapshot using GaiaNet
export const createVectorSnapshot = async (markdown) => {
    try {
        const response = await axios.post('https://api.gaianet-node.com/embed', {
            text: markdown,
            model: 'nomic-embed-text-v1.5.f16'
        }, {
            headers: {
                'Authorization': process.env.GAIANET_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        return response.data.vector;
    } catch (error) {
        console.error('Error calling GaiaNet API:', error.response ? error.response.data : error.message);
        throw new Error('Failed to create vector snapshot');
    }
};

// Compare two vectors
export const compareAnswers = (uploadedVector, correctAnswerVector) => {
    const similarity = calculateVectorSimilarity(uploadedVector, correctAnswerVector);
    return similarity;
};


// Calculate vector similarity
const calculateVectorSimilarity = (vectorA, vectorB) => {
    return Math.random();
};


// Get the correct answer vector
export const getCorrectAnswerVector = async () => {
    const correctAnswerMarkdown = 'Correct answer text here...';
    return await this.createVectorSnapshot(correctAnswerMarkdown);
};
