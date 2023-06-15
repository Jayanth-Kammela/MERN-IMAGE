var express = require('express');
var router = express.Router();
const { getImage, postImage } = require('../controller/multercon')
router.post('/post', postImage);
router.get('/get', getImage)