import express from 'express';
import mongoose from 'mongoose'; //mongoose for further db dev
import path from 'path'; // local path for index.html
import dotenv from "dotenv"; // use external config for PORT
import bodyParser from 'body-parser'; // middleware for parsing

import users from './src/routes/users';  //routes for users actions (login ...)

const app = express();

dotenv.config(); // initialize dotenv config

// mongoose.connect()

app.use(bodyParser.json());

app.use('/users', users) // middleware for users endpoints

app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(process.env.PORT) // listen PORT from .env config
