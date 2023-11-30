// create token and saving into cookie
const sendToken = (user, statuscode, res) => {
    try {
        const token = user.getJWTToken();

        // options for cookie
        const options = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true, // Set this to true when using SameSite=None
            sameSite: "none",
        };

        res.status(statuscode).cookie("token", token, options).json({
            success: true,
            user,
            token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export default sendToken;