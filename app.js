// const express = require('express');
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";
const app = express();


app.use(morgan('dev'));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mainHome = (req, res) => res.send('Hello Nanerwoori!!!');

// Route
app.get('/', mainHome);
app.use('/user', userRouter);




export default app;