const mongoose = require('mongoose');
const { Schema } = mongoose;

const surahSchema = new Schema(
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

const Surah = mongoose.model('Surah', surahSchema)
module.exports = Surah
