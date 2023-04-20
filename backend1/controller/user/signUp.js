const userModel = require("../../models/mongoose/user");
async function SignUp(req, res) {
  let username = req.body.username;
  let email = req.body.email;

  let find = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (find == null) {
    let data = await userModel(req.body).save();
    if (data) {
      res.send(true);
    }
  } else {
    res.send(false);
  }

  res.end();
}
module.exports = SignUp;
