require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const connectDB = require('./config/dbCon');

const PORT = process.env.PORT || 3001;

connectDB()

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


// app.get('/a', (req,res) => {console.log("a")})
app.use('/', require('./routes/root'));
app.use('/auth', require('./routes/auth'));
app.use('/api/user', require("./routes/api/user")); 

mongoose.connection.once('open', () => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
});