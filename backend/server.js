const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');
const roadWorkRoutes = require('./routes/roadWorkRoutes')
const cors = require('cors')

require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

//
app.use(cors())

// Routes
app.use('/api/users', userRoutes);
app.use('/api/roadworks', roadWorkRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
