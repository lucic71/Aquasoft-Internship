// Used for building REST APIs
const express = require('express');

// Used to parse a request and crete a req.body object
const bodyParser = require('body-parser');

// Express middleware to enable CORS
const cors = require('cors');

// Build the app using express
const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
console.log("CORS initialized!");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("body-parser initialized!");

const db = require('./app/models');
db.sequelize.sync().then(() => {
    console.log("Database synced");
});

// Simple route for testing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

require('./app/routes')(app);
console.log("Routes initialized!");

// Listen on 8080 for incoming requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
