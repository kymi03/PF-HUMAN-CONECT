const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentarySchema = new Schema({
    documetaryId: {
        type: Number,
        required: true,
        unique: true,
    },
    documetaryName: {
        type: String,
        required: true,
    },
    documetaryImage: {
        type: String,
    },
    documetaryVideo: {
        type: String,
    },
    documetaryBody: {
        type: Text,
    },
    documetaryAuthor: {
        type: String,
    }
})

module.exports = mongoose.model('Documentary', documentarySchema);
