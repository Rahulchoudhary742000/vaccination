
function Logout(req,res){
    console.log('api called')
    console.log(req.cookies)
    res.clearCookie('vacineUser')
    res.clearCookie('vacineToken')
    res.send('cookie deleted')
}
module.exports=Logout;