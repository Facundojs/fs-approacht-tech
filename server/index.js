import { log } from "console";
import express from "express";
import cors from "cors";

const app = express();

// app.use()

app.post("/signup", (_, res) => res.send("signup"));

app.post("/login", (_, res) => res.send("login"));

app.get("/posts", (_, res) => res.send("posts"));

const PORT = 3010;

app.listen(PORT, () => log(`Listen in ${PORT}`));
