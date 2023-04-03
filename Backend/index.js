const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors=require('cors')
const router=require('./routes/route')


dotenv.config({path:'./config.env'});

require('./db/conn')

const PORT=process.env.PORT;
  

app.use(cors())
app.use(express.json());
app.use(router)


app.listen(PORT, () => console.log(`server is up at port ${PORT}`));
