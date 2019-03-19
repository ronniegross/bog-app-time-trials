const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index.js')

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/client/build/'));
app.use(logger('dev'));


// app.get('/', (req, res) => {
//   res.send("Hello World")
// })

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/controllers/creatureController.js')
// })

app.use('/', routes);

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})



// const express = require('express')
// const app = express


// // app.use(logger('dev'))
// app.use(express.urlencoded({ extended: true }));


// app.use(express.json());
// app.get('/', (req,res) => {
//   res.send('Hello world!')
// })

//     // db

// // const config = require('./config');
// // const { db: { host, port, name } } = config;
// // const connectionString = `mongodb://${host}:${port}/${name}`;
// // mongoose.connect(connectionString);

// const morgan = require('morgan')

// // app.use(morgan('combined'))



//     // port
// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}`)
// })



