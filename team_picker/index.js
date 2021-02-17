const express = require('express');
const app = express();
app.set("view engine", "ejs");

const path = require('path')
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


// Havent installed
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

const methodOverride = require("method-override");
app.use(
  methodOverride((req, res) => {
    if (typeof req.body === "object" && req.body._method) {
      const httpMethod = req.body._method;
      delete req.body._method;
      console.log(`method-override: ${httpMethod}`)
      return httpMethod;
    }
  })
);

const postsRouter = require("./routes/teams");
app.use("/", postsRouter);

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});