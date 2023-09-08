const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();


const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to MongoDB')
}).catch(err => console.log('Error connecting', err))

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})