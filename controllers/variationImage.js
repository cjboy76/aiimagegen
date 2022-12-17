const { openai } = require("../openai");

async function variationImage(req, res) {
  const { image } = req.files;

  //   if (!image) return res.sendStatus(400);

  // If does not have image mime type prevent from uploading
  console.log(image);
  //   if (/^image/.test(image.mimetype)) return res.sendStatus(400);
  //   try {
  //     const response = await openai.createImageVariation(image, 1, "256x256");
  //     image_url = response.data.data[0].url;

  //     console.log(response);

  //     // All good
  res.status(200).json({
    status: "success",
    //   url: response.data.data[0].url,
  });
  //   } catch (error) {
  //     res.status(400).json({
  //       status: "fail",
  //       error: error.message,
  //     });
  //   }
}

module.exports = { variationImage };
