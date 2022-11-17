const express = require('express');
// const logger = require('morgan')
// const cors = require('cors')
const fiction = require('./controllers/Fiction')
const nonfiction = require('./controllers/Nonfiction')

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send({ msg: 'Server is running'})
    console.log('Server is running')
})

app.get('/fiction', fiction.getFiction)

app.get('/nonfiction', nonfiction.getNonfiction)

app.listen(PORT, () => console.log(`${PORT} is working`))