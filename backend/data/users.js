import bcrypt from 'bcryptjs'

const users = [
  {
    name: "ritik",
    email: "ritik@admin.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },

  {
    name: "aditya",
    email: "aditya@admin.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },

  {
    name: "keshav",
    email: "keshav@admin.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
];

export default users;