const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    name: 'Tyler',
    likes: [
      'Hiking',
      'Fishing'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to view request'
  });
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
