const express = require('express');

require('dotenv').config();

const app = express();
app.get('/', (req, res) => {
    res.send('Health check is working');
});

app.listen(process.env.BACKEND_PORT, process.env.BACKEND_HOST, () => {
    console.log(`App listening on port ${process.env.BACKEND_PORT}`);
});

process.on('uncaughtException', (err) => {
    console.log('whoops! there was an unhandled exception', err);
});
process.on('unhandledRejection', function (reason, pmise) {
    console.log('whoops! there was an unhandled rejection', reason, pmise);
});
