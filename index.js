const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/home',(req, res) =>{
    res.json({msg: 'OK'});
})

app.listen(process.env.PORT,() =>{
    console.log(`Server started at port 3000`);
})