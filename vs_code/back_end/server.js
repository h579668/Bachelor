const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");

//const db = require("./models");
//db.sequelize.sync({ force: true }).then(() => {
 // console.log("Drop and re-sync db.");
//});

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
/*
const { Client } = require('pg');
const client = new Client({
user: 'TryMes',
host: 'data1.hib.no',
database: 'TryMes',
password: 'pass',
port: 5434,
})
client
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack));
client.query("SELECT * FROM bruker_tabeller.AKTIVITET", (err, res) => {
console.log(err, res)
client.end()
})*/