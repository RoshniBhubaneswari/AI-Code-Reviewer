const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({ 
    model: "gemini-3-flash-preview", 
    systemInstruction:`You are an code reviewer, who have an expertise in development.
    You look for the code and find the problems and suggest the sollution to the developer.
    
    You always try to find the best solution for the developer and also try to 
    make the code more effective and clean.`
});

async function generateContent(prompt) {
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini 3 Flash Error:", error.message);
        return "Sorry, I encountered an error processing that request.";
    }
}

module.exports = generateContent;