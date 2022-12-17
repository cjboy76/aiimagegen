const router = require("express").Router();
const { generateImage } = require("../controllers/generateImage");
const { variationImage } = require("../controllers/variationImage");

router.post("/generateimage", generateImage);
router.post("/variationimage", variationImage);

module.exports = router;
