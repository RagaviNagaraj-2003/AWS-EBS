const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Good Morning! This is from Ragavi Nagaraj'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);