const express = require('express');
const http = require('http');
const router = require('./router');
const port = process.env.PORT || 7000;

const app = express();


// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });


http.createServer(router).listen(port, () => {
    console.log(`realTimeChat running on http://localhost:${port}`);
});




// http.listen(port, () => {
//     console.log(`Listening on ${port}`);
// });

