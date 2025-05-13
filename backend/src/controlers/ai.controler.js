const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    try {
      const code  = req.body.code;
      if (!code) {
        return res.status(400).send("Prompt is required");
      }
  
      const response = await aiService(code);
      res.send(response);
    } catch (error) {
      console.error(error); // Debug log
      res.status(500).send("Internal Server Error: " + error.message);
    }
  };
  

