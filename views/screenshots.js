// views/screenshots.js

class ScreenshotsController {
    constructor() {
        this.res = [
            { id: 1, event_id: '1', company_id: '100', name: 'Node.js' },
            { id: 2, event_id: '2', company_id: '200', name: 'Express.js' },
            { id: 3, event_id: '3', company_id: '100', name: 'MongoDB' },
            { id: 4, event_id: '4', company_id: '200', name: 'React.js' },
            { id: 5, event_id: '5', company_id: '100', name: 'Vue.js' }
        ];
    }
    
    addScreenshots(req, res) {
        const eventData = req.body;
    
        // Check if there's an item with the same event_id as the eventData's id
        const existingScreenshotIndex = this.res.findIndex(item => item.event_id === eventData.id);
    
        // If there's an existing screenshot with the same event_id
        if (existingScreenshotIndex !== -1) {
            res.status(404).json({ 'success': true, 'message': 'Screenshot already exists', 'response': eventData });
        } else {
            // If there's no existing screenshot with the same event_id, add the new screenshot
            this.res.push(eventData);
            res.status(201).json({ 'success': true, 'message': 'Screenshot added successfully', 'response': eventData });
        }
    }

    getScreenshot(req, res) {
        const eventId = req.params.event_id;
        const screenshot = this.res.filter(item => item.event_id === eventId);
        res.json({'success': true, 'message': 'Successfully retrieved screenshots', 'response': screenshot});
    }
    getScreenshots(req, res) {
        const companyId = req.params.company_id;
        const screenshots = this.res.filter(item => item.company_id === companyId);
        res.json({'success': true, 'message': 'Successfully retrieved screenshots', 'response': screenshots});
    }
    updateScreenshots(req, res) {
        const eventData = req.body;
        const screenshot = this.res.filter(item => item.event_id === eventData.id);
        if (screenshot.length > 0) {
            const index = this.res.indexOf(screenshot);
            this.res[index]=screenshot
        }
        
        res.status(201).json({'success': true, 'message': 'Successfully updated screenshots', 'response': {}});
    }
    deleteScreenshots(req, res) {
        const eventData = req.body;
        const screenshot = this.res.filter(item => item.event_id === eventData.id);
        if (screenshot.length > 0) {
            const index = this.res.indexOf(screenshot);
            this.res.splice(index, 1); // remove item from array
        }
        res.status(200).json({'success': true, 'message': 'Successfully removed screenshots', 'response': {}});
    }
       
}

module.exports = ScreenshotsController;
