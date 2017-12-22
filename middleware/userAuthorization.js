// Authorization for user specific actions
const Podcast = require('../models/podcast')

let userAuthorization = (req, res, next)=>{
  console.log('masuk user-auth', req.headers.decoded_id)
  // console .log('req header =========',req.headers.decoded)
  Podcast.find({_id: req.params.id})
  .then(dataPodcast => {
    console.log('Ini data Podcast',dataPodcast)
    if (dataPodcast.caster === req.headers.decoded_id) {
      console.log('Authorized...')
      next()
    } else {
      console.log('Un-Authorized...')
    res.status(403).json({
      message: 'You have no access...'})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(403).json({
      message: 'You have no access...',
      err: err})
  })
}

module.exports = userAuthorization