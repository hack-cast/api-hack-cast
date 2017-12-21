// podcast controller

// wahib
// zuhri
const Podcast = require('../models/podcast')

class PodcastsController{

  static createPodcast(req, res){
    // method upload dari multer dkk
    // uploadPodcast()
    // .then(result => { // --------------------------------- BEGIN

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

  }

  static findAllByUser(req, res){

  }

  static likeUnlike(req, res){


  }

}

module.exports = PodcastsController

