// podcast controller

// wahib
// zuhri
const Podcast = require('../models/podcast')

class PodcastsController{

  static createPodcast(req, res){
    // method upload dari multer dkk
    // uploadPodcast()
    // .then(result => { // --------------------------------- BEGIN
    console.log('ini req.file', req.file)
      // Database related process starts here
      let newPodcast = {
        caster  : req.body.userId,
        // audioUrl: result.audioUrl, //atau apapun keluaran result
        title   : req.body.title,
        duration: req.body.duration,
        likers  : [] // initial value should be empty, no liker yet
      }
      Podcast.create(newPodcast)
      .then(result => {
        res.status(200).json({
          message : 'Create new podcast successful...',
          data: result
        })
      })
      .catch(err => {
        console.log(err),
        res.status(500).send(err)
      })
    // }) // ---------------------------------------------    END 
  }

  static deletePodcast(req, res){
    console.log(req.params.id)
    Podcast.deleteOne({_id :req.params.id})
    .then(result => {
      res.status(200).json({
        message: 'Delete podcast data Successful !',
        data: result})
    })
    .catch(err => {
      console.log('Masuk error nih')
      console.log(err)
      res.status(500).send(err)
    })
  }

  static findAllPodcast(req, res){
    Podcast.find({})
    .then(result => {
      res.status(200).json({
        message : 'Find all podcasts data successful...',
        data: result
      })
    })
    .catch(err => {
      console.log(err),
      res.status(500).send(err)
    })
  }

  static findAllByUser(req, res){
    Podcast.find({'caster': req.params.userId})
    .then(result => {
      res.status(200).json({
        message : 'Find all podcasts data from specified user successful...',
        data: result
      })
    })
    .catch(err => {
      console.log(err),
      res.status(500).send(err)
    })
  }

  static likeUnlike(req, res){
    // userId located on req.headers.userId
    let userId = req.headers.userid
    console.log(req.params.id, userId)
    Podcast.findOne({_id: req.params.id})
    .then(dataPodcast => {
      console.log(dataPodcast)
      if (dataPodcast.likers.indexOf(userId) === -1){
        dataPodcast.likers.push(userId)
      }
      else {
        dataPodcast.likers.splice(dataPodcast.likers.indexOf(userId),1)
      }
      let newPodcast ={
        caster  : dataPodcast.caster,
        audioUrl: dataPodcast.audioUrl, //atau apapun keluaran result
        title   : dataPodcast.title,
        duration: dataPodcast.duration,
        likers  : dataPodcast.likers
      }
      
      Podcast.update({_id: req.params.id}, newPodcast)
      .then(result => {
        res.status(200).json({
          message : 'Liked / Unliked !',
          data: result
        })
      })
    })
    .catch(err => {
      console.log(err),
      res.status(500).send(err)
    })
  }

}

module.exports = PodcastsController

