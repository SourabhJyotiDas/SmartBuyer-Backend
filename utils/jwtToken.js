// create token and saving into cookie
const sendToken = (user, statuscode, res) => {
   try {
    const token = user.getJWTToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    res.status(statuscode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
   } catch (error) {
    console.log("errror here");
  
   }
}

export default sendToken;