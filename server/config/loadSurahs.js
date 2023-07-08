const Surah = require('../model/quran.js')
const  loadSurahs = async () => {
   const surah = new Surah({name: 'TEST'});
   await surah.save();
 };

module.exports = loadSurahs
