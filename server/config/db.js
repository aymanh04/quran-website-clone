const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/quran';

const connectDb = () => {
    mongoose
	.connect(url, { useNewUrlParser: true })
	 .then(() => console.log('MongoDB Connected'))
	 .catch(err => console.log(err));
}

module.exports = connectDb