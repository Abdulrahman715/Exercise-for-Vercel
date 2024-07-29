require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({ msg: "hello world" });
})

app.listen(PORT, () => {
    console.log('listening on port 9000');
})