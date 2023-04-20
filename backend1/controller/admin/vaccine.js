const vaccineModel = require("../../models/mongoose/vaccine");
const multer = require("multer");
const path = require("path");
const realPath = path.join(__dirname, "uploads");
let imagePath=null;
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, realPath);
    },
    filename: function (req, file, callback) {
      // const ext = path.extname(file.originalname);
      const filename = Date.now() + ".jpg";
      imagePath = filename;
      callback(null, filename);
    },
  }),
  preservePath: true,
}).single("image");

const addVaccine = (req, res) => {
   upload(req, res,async function (err) {
    const { title, description, validity } = req.body;
    const image = req.file;

    console.log(image)
    //  if(imagePath!=null){
    //      let data=await vaccineModel({imagePath,title,description,validity}).save();
    //      if(data){
    //         res.send(true);
    //      }
    //      else{
    //       res.send(false);
    //      }
    //  }
    // console.log(image)
    // console.log("Title:", title);
    // console.log("image", image.filename);
  });
};

module.exports = addVaccine;
