const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongodb connection

const DB_URL = process.env.atlasDB_URL;
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to the Database successfully');
});
db.on('error', () => {
    console.log('Error connecting to the Database');
});


//define a route handler for the default home page

app.get('/', (req, res) => {
    res.send('Welcome to Find My Restaurant!')
})

//routes
require('./routes/restaurantRoute')(app);

//servers a response to the client
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App is listening on${port}`);
})