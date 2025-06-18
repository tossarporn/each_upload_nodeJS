//server.js
const express = require('express');
const cors = require('cors');

const port = '8000';

const app = express();
app.use(cors());


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})