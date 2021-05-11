const express = require("express");
const cors = require("cors");

const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
app.use('/api', require("./app/routes/index.js"));
//require("./app/routes/activity.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
