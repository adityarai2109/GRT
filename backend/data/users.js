import bcrypt from 'bcryptjs'

const users = [
  {
       name :"ritik",
       email : 'ritik@admin.com',
       password : bcrypt.hashSync('12345',10),
        
  },
  
  {
       name :"aditya",
       email : 'aditya@admin.com',
       password : bcrypt.hashSync('12345',10),
       
  },
 
  {
       name :"keshav",
       email : 'keshav@admin.com',
       password : bcrypt.hashSync('12345',10),
       
  },

]

export default users;