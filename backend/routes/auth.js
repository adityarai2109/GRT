import express from "express";
import axios from "axios"
import { signup, signin, signout } from '../controllers/auth.js'

import {
  validateSignupRequest,
  validateSigninRequest,
  name,
  isRequestValidated
} from "../validators/auth.js";

const router = express.Router();
  // console.log(name)
router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);  
router.post("/admin/signout", signout);

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/signout", signout);

export default router;


