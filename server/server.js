require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const axios = require ('axios')
const cors = require('cors')

const ctr = require ('./controllers/addController.js')


const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error);
  });

  app.use('/s3', require('react-s3-uploader/s3router')({
    bucket: "ballistae",
    region: 'us-west-1', //optional
    headers: {'Access-Control-Allow-Origin': '*'}, // optional
    ACL: 'private', // this is default
    uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));

  app.post('/api/product/add', ctr.addProduct);
  app.get('/api/product/get', ctr.getProduct);

  const port = 3003;

app.listen(port, () => console.log(`I'm listening... on port: ${port}`));

