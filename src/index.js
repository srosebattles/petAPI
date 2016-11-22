var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('<div>Hello world</div>');
});

 app.get('/api/pets', (req, res) => {
  res.json({
    "data": {
      "pets": [
         {
           "id": 1,
           "name": "Fluffy",
           "age": 5,
          "uri": "/api/pets/1"
         }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/1"
         }
      ]
       }
   });
 });

 app.get('/api/pets/2', (req, res) => {
  res.json({
      "id": 2,
      "name": "Bob",
      "age": 6,
      "type": "cat"
  });
});

app.get('/api/pets/1', (req, res) => {
  res.json({
    "id": 1,
    "name": "Fluffy",
    "age": 5,
    "type": "dog"
  });
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
