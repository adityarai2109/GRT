import {User} from '../models/userModel.js'
import axios from 'axios'


import bcrypt from 'bcryptjs'


export const  signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec( async (error, user) => {
    if (user){
           var role = ""
         user.isAdmin ? role = "admin" : role = "user"
      return res.status(400).json({
        message: `${role } already registered`,
      });
    }
    else{
      const { name, email, password, isAdmin } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
          name,
        email,
          hash_password,
         isAdmin
        ,
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (data) {
          var role = ""
         data.isAdmin ? role = "admin" : role = "user"
        //console.log(data)
          return res.status(201).json({
            message: `${role} created Successfully..!`,
          });
        }
      });
    }
    });
}

export const  signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(  async (error, user) => {
        if(error)  return res.status(400).json({ message: "  Unauthorized access" });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
            
         if ( isPassword )
      {    
       var role = ""
         user.isAdmin ? role = "admin" : role = "user"
      return res.status(200).json({
        message: `${role } signin success`,
      });

      }
      else{
        return res.status(400).json({ message: " Password not correct " });
      }
    }
      else{
         return res.status(400).json({ message: "  Unauthorized access " });
      }
  });
};

export const  signout = (req, res) => {

  res.status(200).json({
    message: "Signout successfully...!",
  });
}

