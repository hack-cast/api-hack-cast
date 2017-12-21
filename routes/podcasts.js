const express = require('express');
const router = express.Router();
const PodcastsController = require('../controllers/podcasts-controller')


/* GET users Endpoint. */

// Create Podcast
router.post('/', PodcastsController.createPodcast)

// Delete podcast
router.delete('/:id', PodcastsController.deletePodcast)

// Find all podcasts
router.get('/', PodcastsController.findAllPodcast)

// Find all Podcast by userID ??
router.get('/:userId', PodcastsController.findAllByUser)

//like Unlike
router.put('/:id/likeunlike', PodcastsController.likeUnlike)


module.exports = router;