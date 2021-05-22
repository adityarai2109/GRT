import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Not authorized, token failed",
      });
    //  throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(500).json({
        error : "Not authorized, no token"
    });
   // throw new Error("Not authorized, no token");
  }
};
 
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(500).json({
      error: "Not authorized as an admin",
    });
   // throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
