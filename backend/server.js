const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware, set CORS functionality, parse JSON
app.use(cors());
app.use(express.json());

// Mongoose database connection
const uri = process.env.ATLAS_URI || 'mongodb://localhost:27017/share-r';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("We've successfully connected to the MongoDB Database.");
});

// Adding express routes that uses the Mongoose schemas.
const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');

app.use('/items', itemsRouter);
app.use('/users', usersRouter);

// Start the Express Server
app.listen(port, () => {
    console.log(`Server is up'n'runnin' on ${port}`);
});