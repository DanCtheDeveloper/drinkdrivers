const express = require("express");
const { connect } = require("./mongo");
const http = require("http");

connect()
  .then((database) => {
    const app = express();

    app.use(express.json());

    app.get("/", (req, res) => {
      res.json("this is working");
    });

    app.post("/login", async (req, res) => {
      const { email, password } = req.body;
      const users = database.collection("users");
      const user = await users.findOne({ email: req.body.email });
      if (
        req.body.email === user.email &&
        req.body.password === user.password
      ) {
        res.send("login is working");
      } else {
        res.status(400).json("error logging in");
      }
    });

    app.post("signup", (req, res) => {
      database.users.push({ data });
    });

    app.get("profile/id", (req, res) => {
      const { id } = req.params;
      const found = false;
      database.users.forEach((user) => {
        if (user.id === id) {
          found = true;
          return res.json.apply(user);
        }
      });
      if (!found_) {
        res.status(400).json("user not found");
      }
    });
    const server = http.createServer(app).listen(5432);
    console.log(`HTTP server listening on port 5432`);
  })
  .catch(console.log);

//  --> res = this is working
// /signin --POST = success/fail
// register --> POST = user
// profile/:userId --> GET = user
// profile/:brewersId --> Get = brewer
