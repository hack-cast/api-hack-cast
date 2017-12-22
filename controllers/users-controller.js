// users controller

// wahib API
// zuhri FB login

const ObjectId    = require('mongodb').ObjectId;
const User        = require('../models/user');
const jwt         = require('jsonwebtoken');
var FB = require('fb')

class UsersController{

  // login
  static login(req, res){
    console.log(req.body.data, ' ini req body------------')
    FB.api(
      `/${req.body.data.authResponse.userID}`,
      'GET',
      {fields: ['email','first_name', 'last_name', 'picture'],
      access_token: req.body.data.authResponse.accessToken },
      (response) => {
          console.log(response,'ini response dari fb')
          User.findOne({email: response.email})
          .then(dataUser => {
            if (dataUser == null){
              let newUser = {
                email: response.email,
                profPicUrl: response.picture.data.url,
                userName: `${response.first_name} ${response.last_name}`
              }
              User.create(newUser)
              .then(result => {
                console.log(result)
                let payload = {
                  _id       : result._id,
                  userName  : result.userName,
                  email     : result.email,
                  profPicUrl: result.profPicUrl,
                }
                let token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN);
                console.log('ini token create', token)
                res.status(200).json({
                  message : 'Login Successful',
                  data    : result,
                  token   : token
                })
              })
            } else{
              let payload = {
                _id       : dataUser._id,
                userName  : dataUser.userName,
                email     : dataUser.email,
                profPicUrl: dataUser.profPicUrl,
              }
              console.log('ini payload',payload)
              let token = jwt.sign(payload, process.env.JWT_SECRET_TOKEN);
              console.log('ini token', token)
              res.status(200).json({
                message : 'Login Successful',
                data    : dataUser,
                token   : token,
              })
            }
          })
          .catch(err => {
            console.log(err)
            res.status(500).send(err)
          })
      }
    );
    
  }

  static deleteUser(req, res){ 
    User.deleteOne({_id :req.params.id})
    .then(result => {
      res.status(200).json({
        message: 'Delete Successful !',
        data: result})
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static findAllUser(req, res){
    User.find({})
    .then(dataUsers => {
      res.status(200).json({
        message: 'Find all user data successful',
        data: dataUsers
      })
    })
    .catch(err => {
      console.log(err)
      res.status(200).send(err)
    })
  }

  static findUserById(req, res){
    User.find({_id: req.params.id})
    .then(dataUser => {
      res.status(200).json({
        message: 'Find user specific data successful',
        data: dataUser
      })
    })
    .catch(err => {
      console.log(err)
      res.status(200).send(err)
    })
  }

  

}

module.exports = UsersController