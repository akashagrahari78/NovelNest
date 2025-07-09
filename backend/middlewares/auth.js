const jwt = require("jsonwebtoken")

const authUser = async (req, res, next) => {
      const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(401).json({ 
            success: false, 
            message: "Authorization header missing" 
        });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: "No token provided" 
        });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id;
        next()
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}
module.exports = {authUser}