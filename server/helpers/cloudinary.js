


const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: 'dszkdvueo',
    api_key:  '552687975233773',
    api_secret: 'KD3rIQQCmkcVSAk4dU34JS5cB8c',
});

const storage = new multer.memoryStorage();
async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'
    });
    return result;
}

const upload = multer({storage});
module.exports = {upload, imageUploadUtil};
