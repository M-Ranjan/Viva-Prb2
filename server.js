const express = require('express');
const {startDatabase,isConnected} = require( './db' );
const User = require('./models/user.model')
require('dotenv').config()

const cors  = require( 'cors' )

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json()); 



app.get('/', (req, res) => {
    res.json({
      message: 'o_O',
      database: isConnected() ? 'connected' : 'disconnected'
    })
  });
  

    app.get('/nextpage', (req, res) => {
      res.send('Welcome!!');
    });
    
    app.listen(port, async () => {
      await startDatabase();
  
      console.log(`🚀 Full Stack Magic Unleashed! Server conquering PORT: 💻✨ ${port}`);
    });
  
  
  module.exports = app;