const express = require("express");
const path = require("path");
const logger = require("morgan");
const favicon = require("serve-favicon");
const cors = require("cors");
const port = process.env.PORT || 3001;

require("dotenv").config();
require("./controllers/users");
require("./config/database");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const coursesRouter = require("./routes/courses");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "build")));

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}`)
})

module.exports = app;
