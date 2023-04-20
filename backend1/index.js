const express = require("express");
const cors = require("cors");
const userRouter=require('./models/routes/user');
const adminRouter=require('./models/routes/admin');
const childRouter=require('./models/routes/child');
const app = express();

app.use(
  cors({
    origin:"http://localhost:3000",
    credentials: true,
  })
);

//Router
app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/child',childRouter)

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function(req, file, callback) {
//       callback(null, 'uploads/');
//     },
//     filename: function(req, file, callback) {
//       const ext = path.extname(file.originalname);
//       const filename = 'bcd'+ ext;
//       callback(null, filename);
//     }
//   }),
//   // Add this option to preserve the req.body object
//   preservePath: true
// }).single('image');

// app.post('/upload',upload,(req,res)=>{
//   // // console.log(req.body)
//   console.log(req.body);
//   res.send(`file uploaded`);
// })
app.listen(7777);
