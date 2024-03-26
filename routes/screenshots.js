// routes/screenshots.js

const express = require('express');
const ScreenshotsController = require('../views/screenshots');

const router = express.Router();
const screenshotsController = new ScreenshotsController();

router.post('/', screenshotsController.addScreenshots.bind(screenshotsController));
router.get('/:event_id', screenshotsController.getScreenshot.bind(screenshotsController));
router.get('/all/:company_id', screenshotsController.getScreenshots.bind(screenshotsController));


module.exports = router;
