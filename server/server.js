import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import multer from 'multer';
import axios from 'axios';

import apiRouter from './router';



const app = express();
app.use(cors());

app.use(multer().none());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.disable('x-powered-by');
app.use(apiRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
