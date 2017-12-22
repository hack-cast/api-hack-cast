const express = require('express');
const router = express.Router();
const PodcastsController = require('../controllers/podcasts-controller')
const multerUpload = require('../middleware/multer')
const gcsUpload = require('../middleware/gcs')

const authentication = require('../middleware/authentication')
const userAuthorization = require('../middleware/userAuthorization')

/* GET users Endpoint. */

// Create Podcast
router.post('/', multerUpload.single('audio'), gcsUpload, PodcastsController.createPodcast)

// Delete podcast
router.delete('/:id', authentication, userAuthorization, PodcastsController.deletePodcast)

// Find all podcasts
router.get('/', PodcastsController.findAllPodcast)

// Find all Podcast by userID ??
router.get('/:userId', PodcastsController.findAllByUser)

//like Unlike
router.put('/:id/likeunlike', authentication, userAuthorization, PodcastsController.likeUnlike)


module.exports = router;