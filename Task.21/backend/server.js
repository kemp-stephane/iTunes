const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const routes = require('./index');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());


app.use('/api', routes);

app.get(``,(req,res)=>{
   res.send('Hey, your are live');
})

app.get(`/search`, (req, res) => {
   const term = req.query.term;
   const media = req.query.media;

   fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=30`)
      .then(result => result.json())
      .then (response => {
         res.send({
            message: 'successful',
            response
         }) 
      })
      .catch(error => {
         res.send({
            message: 'error'
         })
      })
})

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, 'frontend/build')));
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
   });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;