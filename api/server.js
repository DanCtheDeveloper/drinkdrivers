
const express = require("express");
const { connect } = require("./mongo");
const http = require("http");
const knex = require('knex')

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

// postgres.select('*').from('users').then(data => {
//     console.log(data);
// });

connect()
  .then((database) => {
    const app = express();

    app.use(express.json());

    app.get("/", (req, res) => {
      res.json("this is working");
    });

    app.post("/login", async (req, res) => {
      db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
          const isValid =bcrypt.compareSync(req.body.password, data[0].hash)
          if (isValid) {
            return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user => {
              res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to get user'))
          } else {
          res.status(400).json('wrong credentials')
          }
        })
        .catch(err => res.status(400).json('wrong credentials'))
    });

    app.post("signup", (req, res) => {
      const { email, password } = req.body;
      const hash = bcrypt.hashSync(password);
      db.transactions((trx) => {
        trx.insert({
            hash: hash,
            email: email,
          })
          .into("login")
          .returning("email")
          .then(loginEmail => {
            return trx("users")
              .returning("*")
              .insert({ 
                email: loginEmail[0], 
              })
              .then((user) => {
                res.json(user[0]);
          })
          .then(trx.commit)
          .catch(trx.rollback)
        })
        .catch((err) => res.status(400).json("error signing up"));
      });

    app.get("profile/id", (req, res) => {
      const { id } = req.params;
      db.select('*').from('users').where({id})
      .then(user => {
        if (user.length) {
          res.json(user[0])
        } else {
          res.status(400).json("user not found");
        }
      })
      .catch(err => res.status(400).json('error getting user'));
    });

    const server = http.createServer(app).listen(5432);
    console.log(`HTTP server listening on port 5432`);
  })
  .catch(console.log);
})

//  --> res = this is working
// /signin --POST = success/fail
// register --> POST = user
// profile/:userId --> GET = user
// profile/:brewersId --> Get = brewer
