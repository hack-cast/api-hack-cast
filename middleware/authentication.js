// authentication of user

const jwt = require('jsonwebtoken');

let authentication = (req, res, next) => {
  console.log('masuk auth', req.headers.token) 
  jwt.verify(req.headers.token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
    // console.log(decoded)
    if (err) {
      res.status(403).json({
        message: 'You don\'t have access!',
        data   : err
      })
    } else {
      console.log(decoded, 'NEXT')
        req.headers.decoded = decoded
        next()
    }
  })
}

module.exports = authentication