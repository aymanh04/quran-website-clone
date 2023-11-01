const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const connectDb = require('./config/db')
const loadSurahs = require('./config/loadSurahs')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

connectDb();
const apiPort = process.env.NODE_LOCAL_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    loadSurahs();
    res.send('Hello World!')
})

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(apiPort, () => {
    console.log(`Server listening on ${apiPort}`);
});
