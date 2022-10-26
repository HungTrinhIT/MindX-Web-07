// Upload image to local machine
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { MulterError } = require("multer");

const MAXIMUM_IMAGE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_FILES = ["image/png", "image/jpg", "image/jpeg"];

const generateFilename = (file) => {
  return `${new Date().valueOf()}${crypto
    .createHash("md5")
    .update(file.fieldname)
    .digest("hex")}${path.extname(file.originalname)}`;
};

const storageInstance = multer.diskStorage({
  destination: (req, file, cb) => {
    const dirname = path.resolve("./");
    const dirFull = path.join(dirname, "uploads");

    fs.mkdir(dirFull, (err) => {
      cb(null, dirFull);
    });
  },
  filename: (req, file, cb) => {
    const filename = generateFilename(file);
    cb(null, filename);
  },
});

const fileFilterFn = (req, file, cb) => {
  const fileType = file.mimetype;
  const isValidFile = ACCEPTED_FILES.includes(fileType);

  if (isValidFile) {
    cb(null, true);
  } else {
    cb(new MulterError("LIMIT_UNEXPECTED_FILE", "Un-supported file"), false);
  }
};

const imageUploadService = multer({
  storage: storageInstance,
  fileFilter: fileFilterFn,
  limits: {
    fileSize: MAXIMUM_IMAGE_SIZE,
  },
});

module.exports = {
  imageUploadService,
};
