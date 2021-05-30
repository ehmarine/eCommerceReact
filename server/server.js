const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;

const serverURI = 'http://localhost:' + PORT
const mongoURI = 'mongodb+srv://Marcus:Bytmig123@cluster0.ian6z.mongodb.net/REST?retryWrites=true&w=majority';

process.env.MONGO_URI

app.listen(PORT, () => console.log('Server running at:' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to db'))

