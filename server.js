const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/log', (req, res) => {
    const payeerNumber = req.body.payeerNumber;
    fs.appendFile('log.txt', `${payeerNumber}\n`, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Data saved to log.txt');
        }
    });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
