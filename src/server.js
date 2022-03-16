const showdown = require("showdown");
const { readFileSync } = require("fs");

const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("./src/db/db.json");
app.use(jsonServer.bodyParser);
app.db = router.db;

const rules = auth.rewriter({
  users: 600,
  techs: 644,
});

// Adiciona o campo createdAt com a data de criação do registro
app.post("/register", (req, res, next) => {
  req.body.createdAt = new Date().toUTCString();
  next();
});

app.get("/echo", function (req, res) {  
  res.status(200).json(req.query);
});

app.get("/help", function (req, res) {
  const dataRead = readFileSync("./README.md").toString("utf8");
  converter = new showdown.Converter();
  res.type("text/html");
  res.send(converter.makeHtml(dataRead));
});
app.post("/techs", function (req, res,next) {  
  if (req.query.userId) {
    req.body.userId = req.query.userId;
  } else {
    res.status(400).json({message: "Não foi informado o usuário."});
  } 
  next();
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
