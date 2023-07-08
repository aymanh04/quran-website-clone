const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const connectDb = require('./config/db')
const loadSurahs = require('./config/loadSurahs')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

connectDb();
const apiPort = process.env.NODE_LOCAL_PORT || 8082;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    loadSurahs();
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
