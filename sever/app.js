const express = require('express');
const app = express();
const multer = require('multer');//middleware that process files uploaded in multipart/form-data===dividing into
const path = require('path');
const uploadModel = require('./model/upload');
let mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());


const storage = multer.diskStorage({

  // destination	The folder to which the file has been saved	
  // filename	The name of the file within the destination
  destination: (req, file, cb) => {
    cb(null, 'Upload') //to determine whrere to store the files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`) //at here we are storing date with original by using the path module
  }
})

const fileFilter = (req, file, cb) => {
  console.log(file.mimetype);
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "text/plain") {
    cb(null, true);
  } else {
    cb("JPEG and PNG only supported", false);
  }
};

const upload = multer({ storage: storage, limts: { fileSize: 1024 * 1024 * 5, }, fileFilter: fileFilter });


async function main() {
  try {
    await mongoose.connect('');
  } catch (error) {
    console.log(error);
  }
}
main()

app.use(express.static(path.join(__dirname, './Upload')));

app.get('/', async (req, res) => {
  try {
    const data = await uploadModel.find()
    res.status(200).send(data);
    // return res.status(200).json("Retrive the images")
  } catch (error) {

  }
})

//uploadModel.find

app.post('/post', upload.single('File'), async (req, res) => {
  const file = req.file.filename.toString()
  console.log(req.file);
  try {
    const users = new uploadModel({ File: file });
    users.save()
    return res.status(200).send(users);
  } catch (error) {
    return res.status(422).json(error);
  }

})


app.listen(8084, () => {
  console.log('runing on 8084');
})
