const jwt = require('jsonwebtoken');
const UserModel = require("../models/UserModel");
require('dotenv').config({ path: "./config/config.env" });

exports.userAuth = async (req, res, next) => {
  let token;

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.user = await UserModel.findById(decoded._id);
      
      if (!req.user) {
        return res.status(404).json({ message: 'User not found' });
      }

      next();
    } else {
      return res.status(401).json({ message: 'No token provided' });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(401).json({ message: 'Unauthorized Token' });
  }
};