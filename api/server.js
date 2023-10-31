
const express = require("express");
const http = require("http");
const knex = require('knex')
const app = express()
const server = http.createServer(app);
require("dotenv").config();

const url = 'https://us-west-2.aws.data.mongodb-api.com/app/data-ybkyh/endpoint/data/v1';

knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1', 
        user : 'postgres',
        port: 5432,
        password : 'kgsSCoNLYiaxbHjj',
        database : 'drinkdrivers'
    }
})

// const pg = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: config.DATABASE_URL,
//     host: config["DB_HOST"],
//     port: config["DB_PORT"],
//     user: config["DB_USER"],
//     database: config["DB_NAME"],
//     password: config["DB_PASSWORD"],
//     ssl: config["DB_SSL"] ? { rejectUnauthorized: false } : false,
//   }
// });

// postgres.select('*').from('users').then(data => {
//     console.log(data);
// });


app.use(express.json());

app.get("/", (req, res) => {
  res.json("this is working");
});

app.post("/login", async (req, res) => {
  db.select("email", "hash")
    .from("login")
    .where("email", "=", req.body.email)
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json("unable to get user"));
      } else {
        res.status(400).json("wrong credentials");
      }
    })
    .catch((err) => res.status(400).json("wrong credentials"));
});

app
  .post("signup", (req, res) => {
    const { email, password } = req.body;
    const hash = bcrypt.hashSync(password);
    db.transactions((trx) => {
      trx
        .insert({
          hash: hash,
          email: email,
        })
        .into("login")
        .returning("email")
        .then((loginEmail) => {
          return trx("users")
            .returning("*")
            .insert({
              email: loginEmail[0],
            })
            .then((user) => {
              res.json(user[0]);
            })
            .then(trx.commit)
            .catch(trx.rollback);
        })
        .catch((err) => res.status(400).json("error signing up"));
    });

    app.get("profile/id", (req, res) => {
      const { id } = req.params;
      db.select("*")
        .from("users")
        .where({ id })
        .then((user) => {
          if (user.length) {
            res.json(user[0]);
          } else {
            res.status(400).json("user not found");
          }
        })
        .catch((err) => res.status(400).json("error getting user"));
    });

    const server = http.createServer(app).listen(5432);
    console.log(`HTTP server listening on port 5432`);
  })

//  --> res = this is working
// /signin --POST = success/fail
// register --> POST = user
// profile/:userId --> GET = user
// profile/:brewersId --> Get = brewer
