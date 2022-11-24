
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));


const dbService = require('./dbService')

// hinzufügen
app.post('/insert', (request, response) => {
  const { kundennummer } = request.body;
  const db = dbService.getDbServiceInstance();
  const result = db.insertNewKunde()
});


// sehen
app.get('/getAll', (request, responde) => {
  const db = dbService.getDbServiceInstance();
  const result = db.getAllData();
  
  result
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));

})

// ändern

// löschen


app.listen(process.env.PORT, () => console.log('app is running'))