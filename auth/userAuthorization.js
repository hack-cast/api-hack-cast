// Authorization for user specific actions
const Podcast = require('../models/podcast')

let userAuthorization = (req, res, next)=>{
  // console.log('req body------------',req.body)
  console .log('req header =========',req,headers)
  Podcast.find({caster: req.headers.decoded._id})
  .then(dataPodcast => {
    console.log(dataPodcast)
    next()
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

module.exports = userAuthorization