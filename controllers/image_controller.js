
const { bucket } = require('../firebase_setup/firebase')

var gm = require('gm');


const upload = async (req, res) => {

    const fileName = req.file.originalname
    console.log(fileName)
    if (req.file) {
        gm(req.file.buffer).thumbnail(300, 200).write("thumbnail.png", function (err) {
            if (err) console.log(err)
        });
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        await delay(2000)

        await bucket.upload("thumbnail.png", { destination: fileName })

        res.status(200).send('Image Succesfullly Uploaded');
    } else {
        res.status(404).send("Please upload an image")
    }


};

const download = async (req, res) => {


    if (req.body.imageName) {

        const file = bucket.file(req.body.imageName)
        file.getSignedUrl({ action: 'read', expires: "03-09-2491" }).then(signedUrls => {
            return res.send(signedUrls[0])
        }).catch(err => {
            return res.status(400).send("image doesnt exist in storage")
        })
    }
    else res.status(400).send("imageNmae is miising from the body")



};

module.exports = { upload, download };