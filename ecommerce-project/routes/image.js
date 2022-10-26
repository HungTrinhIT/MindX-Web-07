const express = require("express");
const { imageUploadLocal } = require("../middlewares/imageUploadLocal");
const {
  cloudinaryUploadService,
} = require("../services/cloudinaryUploadService");
const router = express.Router();

router.post("/upload", imageUploadLocal, async (req, res) => {
  // Step 1
  const file = req.file;
  const path = file.path;

  try {
    const uploadResponse = await cloudinaryUploadService(
      path,
      process.env.CLOUDINARY_IMAGE_FOLDER
    );
    const { secure_url, height, width } = uploadResponse;
    return res.json({
      msg: "Successfully",
      data: {
        url: secure_url,
        width,
        height,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
