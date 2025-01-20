const multer  = require('multer')
const path  = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // file will be stored
    cb(null, path.join(__dirname,'../uploads/'));
  },
  filename: (req, file, cb) => {
    // Customize the name of the file
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });
module.exports=upload