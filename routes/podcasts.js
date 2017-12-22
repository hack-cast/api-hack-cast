const express = require('express');
const router = express.Router();
const PodcastsController = require('../controllers/podcasts-controller')
const multerUpload = require('../auth/multer')
const gcsUpload = require('../auth/gcs')

const authentication = require('../auth/authentication')
const userAuthorization = require('../auth/userAuthorization')

/* GET users Endpoint. */

// Create Podcast
router.post('/', multerUpload.single('audio'), gcsUpload, PodcastsController.createPodcast)

// Delete podcast
router.delete('/:id', PodcastsController.deletePodcast)

// Find all podcasts
router.get('/', PodcastsController.findAllPodcast)

// Find all Podcast by userID ??
router.get('/:userId', PodcastsController.findAllByUser)

//like Unlike
router.put('/:id/likeunlike', authentication, userAuthorization, PodcastsController.likeUnlike)


module.exports = router;