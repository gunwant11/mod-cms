
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// Define models

const db = require("./src/models");
const User = require('./src/models/user.model');
const url = 'mongodb://mongo:27017/mod-db';

db.mongoose.connect(url).then(() => {
    console.log("Connected to the database!");
    }).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
    });


app.get("/", (req, res) => {
    res.json({ message: "Welcome to  application." });
    }
);

// require("./app/routes/tutorial.routes")(app);

// Define routes
// app.get('/users', async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// Start server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
