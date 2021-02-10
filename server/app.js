const mongoose= require('mongoose');
const express= require('express')
const {mongoURI}= require('./keys');
const app = express();
const PORT= 5000;
const cors = require('cors');


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
})
mongoose.connection.on('error', (err) => {
    console.log('error in connection to mongodb',err);
})
require('./models/user');//it should also before route
require('./models/post')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));  
app.use(express.json()) //middleware and this should be before router to convert into json

const auth= require('./routes/auth');
app.use(auth); //middleware
app.use(require('./routes/post'));


app.listen(PORT, (req,res) => {
    console.log(`server is running on ${PORT}`);
});
