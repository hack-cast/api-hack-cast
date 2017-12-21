// podcast controller

// wahib
// zuhri
const Podcast = require('../models/podcast')

class PodcastsController{

  static createPodcast(req, res){
    // method upload dari multer dkk
    // uploadPodcast()
    // .then(result => {

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
        res.status(200).jason({
          message : 'Create new podcast successful...',
          data: result
        })
      })
      .catch(err => {
        console.log(err),
        res.status(500).send(err)
      })
      

    // })

   
    
  }

  static deletePodcast(req, res){

  }

  static findAllPodcast(req, res){

  }

  static findAllByUser(req, res){

  }

  static likeUnlike(req, res){


  }

}

module.exports = PodcastsController

