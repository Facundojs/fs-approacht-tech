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
  return res.send("login")
});

app.get("/posts", (_, res) => res.send("posts"));

const PORT = 3010;

app.listen(PORT, () => log(`Listen in ${PORT}`));
