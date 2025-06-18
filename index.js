//server.js
const express = require('express');
const multer = require('multer');
//dest:'uploads/' คืออัพโหลดไปยังไฟล์ uploads/
const upload = multer({dest:'uploads/'});
const cors = require('cors');

const port = '8000';

const app = express();
app.use(cors());

//app.post('/part',Middleware=>upload.single('key'),(req,res)
app.post('/upload',upload.single('test'),(req,res)=>{
    //1.ตัวแปรที่จะรับชื่อตัวแปร อะไร
    //2.part ที่จะเอาไฟล์ไปวาง
    res.json({
        message:"Hello upload"
    });
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})