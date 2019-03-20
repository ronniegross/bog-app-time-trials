const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index.js')

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api/v2', routes)

app.use('/', routes)

// app.get('/', (req, res) => {
//     res.send("hello world")
// })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('App is listening on port ' + PORT)
})