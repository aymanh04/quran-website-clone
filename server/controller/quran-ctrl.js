const Quran = require('../models/quran-model')

createQuran = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a quran',
    })
  }

  const quran = new Quran(body)

  if (!quran) {
    return res.status(400).json({ success: false, error: err })
  }

  quran
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: quran._id,
        message: 'quran created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'quran not created!',
      })
    })
}
