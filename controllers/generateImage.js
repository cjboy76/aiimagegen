const { openai } = require("../openai");

async function generateImage(req, res) {
  const { prompt } = req.body;
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "256x256",
    });
    res.status(200).json({
      staus: "success",
      data: {
        url: response.data.data[0].url,
      },
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      staus: "fail",
      data: {
        error: error.message || error.response.data,
      },
    });
  }
}

module.exports = { generateImage };
