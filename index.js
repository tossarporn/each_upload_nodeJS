//server.js
const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    //Date.now() = การเอาเวลาปัจจุบัน แต่เป็น unixtime ตัวเลขชุดเดียวออกมา
    //file.originalname = อัปโหลดชื่อไฟล์ไหนใช้ ชื่อไฟล์นั้นรวมทั้งสกุลไฟล์นั้นด้วย
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName)
  }
})

//dest:'uploads/' คืออัพโหลดไปยังไฟล์ uploads/
const upload = multer({
    storage,
    limits:{
        fileSize:1024*1024*2
    },
    fileFilter:(req,file,cb)=>{
      if(file.mimetype === 'image/png'){
        //allow
        //ถ้าข้อมูลผ่าน ไม่ต้องส่ง callback กลับมา
        cb(null,true)
      }
      else{
        //ถ้าข้อมูลไม่ผ่าน จะ callback กลับมา
        cb(new Error('not allow other files witout image/png'),false)
      }
    }
});
const cors = require('cors');

const port = '8000';

const app = express();
app.use(cors());

//app.post('/part',Middleware=>upload.single('keyที่รับ'),(req,res)
app.post('/upload',upload.single('test'),(req,res)=>{
  res.json({
        message:"upload succreeful"
      });
    // upload.single('test')(req,res,(err)=>{
    //   console.log(err)
    //   if(err){
    //     res.status(400).json({message:err.message});
    //     return false;// ไม่ให้ return ซ้ำ
    //   }
      
    // });
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})