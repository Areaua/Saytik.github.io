const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let logs = [];

app.post('/log', (req, res) => {
    console.log("Received POST request to /log");
    const payeerNumber = req.body.payeerNumber;
    console.log("Payeer number: ", payeerNumber);
    if (payeerNumber) {
        logs.push(payeerNumber);
        console.log("Payeer number logged successfully");
        res.send('Номер PAYEER успешно записан');
    } else {
        console.log("Payeer number not provided");
        res.status(400).send('PAYEER номер не указан');
    }
});

app.get('/logs', (req, res) => {
    res.json(logs);
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = app;
