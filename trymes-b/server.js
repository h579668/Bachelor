const express = require("express");
const cors = require("cors");
const running = require("./app/score.js")

//const controller = require("./app/controllers/user.controller.js");
const controller = require("./app/controllers/user_activity.controller.js");

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
const { users_features } = require("./app/models");

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

//const userObject = controller.createUser(2,1);
//console.log(userObject);
 /*const run = async () => {
 // console.log(userObject);
 // await controller.addToDatabase(userObject);
  
  const user = await controller.createUser(2,1);

  const userData = await controller.findUserById(user.users_id);
  console.log(
    ">> User id=" + userData.users_id,
    (userData)
  );

 }

 run();
*/
//running.calculate();
//controller.addActivity();

