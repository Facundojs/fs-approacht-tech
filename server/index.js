import { log } from "console";
import express from "express";
import cors from "cors";
import db from './db.js'
const app = express();
import bodyParser from 'body-parser'
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

app.post("/signup", (_, res) => res.send("signup"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = db.users.find(user => user.username === username && user.password === password)

  if (user) return res.json({ user })
  else return res.json({ user: null})
});

app.get("/posts", (_, res) => res.send("posts"));

const PORT = 3010;

app.listen(PORT, () => log(`Listen in ${PORT}`));
