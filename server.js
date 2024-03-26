// app.js

const express = require('express');
const screenshotsRouter = require('./routes/screenshots');
const videosRouter = require('./routes/videos');

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/screenshots', screenshotsRouter);
app.use('/api/videos', videosRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
