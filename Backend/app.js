const express = require('express')
const session = require('express-session')
const mongoose=require('mongoose')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())
const port = 3001;

//mongodb connection string
const db = require('./config/key').MongoURI;

//mongodb connection
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("mongodb connect")
    })
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.json({ message: 'from backend to frontend' })
})

app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
    // cookie: { secure: process.env.ENV === 'PRODUCTION' }  production mai jab daalenge tab comment out kar denge
}));

app.use('/user', require('./Route/user'))

app.listen(port, () => {
    console.log(`port is listening ${port}`)
})