
const express = require("express")
const router = express.Router()
const { ImageController } = require('../controllers')
const { upload } = require("../middleware/upload")

router.post('/upload', upload.single('file'), ImageController.upload)

router.get('/download', ImageController.download)


module.exports = router;
