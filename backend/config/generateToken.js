import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 60,
  })
}

export default generateToken
/// can I delete a token  
/// can i make multiple token