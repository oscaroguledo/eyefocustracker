// routes/videos.js

const express = require('express');
const VideosController = require('../views/videos');

const router = express.Router();
const videosController = new VideosController();

router.post('/', videosController.addVideo.bind(videosController));
router.get('/:event_id', videosController.getVideo.bind(videosController));
router.get('/all/:company_id', videosController.getVideos.bind(videosController));

module.exports = router;
