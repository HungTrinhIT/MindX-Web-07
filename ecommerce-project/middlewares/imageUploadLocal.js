const { MulterError } = require("multer");
const { imageUploadService } = require("../services/imageUploadService");

const imageUploadLocal = (req, res, next) => {
  const uploader = imageUploadService.single("image");
  uploader(req, res, (err) => {
    if (err instanceof MulterError) {
      return res.status(400).json({
        msg: err.message,
      });
    } else if (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }

    next();
  });
};

module.exports = {
  imageUploadLocal,
};
