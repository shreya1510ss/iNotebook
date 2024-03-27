const connectToMongo=require('./db');
const express = require('express')
connectToMongo();
const app = express()
require('dotenv').config();

var cors = require('cors')
app.use(cors())





const port = process.env.PORT|| 5000;

app.use(express.json());

//available routes

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.use("/",(req,res)=>{
  res.send("server running");
})





app.listen(port, () => {
  console.log(`iNotebook  app listening on port ${port}`)
})

