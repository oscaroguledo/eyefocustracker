// views/videos.js
const helper = require('../helper');

class VideosController {
    constructor() {
        this.res = [
            { id: 1, event_id: '1', company_id: '100', name: 'Node.js' },
            { id: 2, event_id: '2', company_id: '200', name: 'Express.js' },
            { id: 3, event_id: '3', company_id: '100', name: 'MongoDB' },
            { id: 4, event_id: '4', company_id: '200', name: 'React.js' },
            { id: 5, event_id: '5', company_id: '100', name: 'Vue.js' }
        ];
    }
    
    addVideo(req, res) {
        const eventData = req.body;
    
        // Check if there's an item with the same event_id as the eventData's id
        const existingScreenshotIndex = this.res.findIndex(item => item.event_id === eventData.id);
    
        // If there's an existing screenshot with the same event_id
        if (existingScreenshotIndex !== -1) {
            res.status(404).json({ 'success': true, 'message': 'Video already exists', 'response': eventData });
        } else {
            // If there's no existing screenshot with the same event_id, add the new screenshot
            const vidstring = helper.videoToString(eventData.video);
            console.log(vidstring);
            this.res.push(eventData);

            res.status(201).json({ 'success': true, 'message': 'Video added successfully', 'response': eventData });
        }
    }
    

    getVideo(req, res) {
        const eventId = req.params.event_id;
        const video = this.res.filter(item => item.event_id === eventId);
        res.json(video);
    }
    getVideos(req, res) {
        const companyId = req.params.company_id;
        const videos = this.res.filter(item => item.event_id === companyId);
        res.json(videos);
    }
}

module.exports = VideosController;
