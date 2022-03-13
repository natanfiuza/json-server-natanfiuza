const chalk = require("chalk");

const myauth = require("./modules/MyAuth");

const showdown = require("showdown");
const { readFileSync } = require("fs");

const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("./src/db/db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.db = router.db;
/*
app.use((req, res, next) => {
  if (isAuthorized(req)) {
   // res.send("teste");

    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});
*/

app.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

app.get("/help", function (req, res) {
  const dataRead = readFileSync("README.md").toString("utf8");
  converter = new showdown.Converter();
  res.type("text/html");
  res.send(converter.makeHtml(dataRead));
});

const rules = auth.rewriter({
  users: 600,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

