const mongoose = require('mongoose');
const { Schema } = mongoose;

const quranSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Quran', quranSchema)