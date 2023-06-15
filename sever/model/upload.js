const mongoose = require('mongoose');

const uploadModel = mongoose.Schema({
    File: { type: String }
})

uploadModel.statics.signup = async function (File) {
    //methods that are directly invoked by model and called helper functions & applied entire model
    if (!File) {
        throw Error('This field must be filled')
    }
}

module.exports = mongoose.model("FileUpload", uploadModel)