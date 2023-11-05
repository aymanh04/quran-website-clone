const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/quran';

const connectDb = (url) => {
	return mongoose.connect(url, { useNewUrlParser: true });
};

// Define the Surah schema
const surahSchema = new mongoose.Schema({
	ID: {
		type: Number,
		required: true,
		unique: true,
	},
	juzNum: {
		type: Number,
		required: true,
		unique: true,
	}
});

// Define the Ayah schema
const ayahSchema = new mongoose.Schema({
	ID: {
		type: Number,
		required: true,
		unique: true,
	},
	surahID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Surah',
		required: true,
	},
	pageNum: {
		type: Number,
		required: true,
		unique: true,
	},
	arabicContent: {
		type: String,
		required: true,
		unique: true,
	},
	englishContent: {
		type: String,
		required: true,
		unique: true,
	},
});

let Surah;
let Ayah;

connectDb(url) // Pass the URL to the connection function
	.then(() => {
		console.log('MongoDB Connected');
		// Create models from the schemas after successful connection
		Surah = mongoose.model('Surah', surahSchema);
		Ayah = mongoose.model('Ayah', ayahSchema);
	})
	.catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = { connectDb, Surah, Ayah };
