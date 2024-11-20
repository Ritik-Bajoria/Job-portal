const express = require('express');
const connection = require('./connection');
// const mongoose = require('mongoose');
const app = express();
const logger = require('./controllers/logger');
const listingsRouter = require('./routes/listingsRoutes');
require('dotenv').config();
app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use('/api/listings', listingsRouter);

//Connnect to database
connection.connectMongoDB(process.env.Database_URL)
.then(() => logger.info("Connected to mongoDB database")) // verification statement
.catch((error) => logger.error("Mongo Error", error));

app.listen(process.env.port,()=>{
    logger.info(`Server is running on port ${process.env.port}`);
})