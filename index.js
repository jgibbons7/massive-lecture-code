require('dotenv').config()

const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      port = SERVER_PORT,
      app = express();



app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('db connected')
})

app.post('/api/movies', ctrl.addMovie)
app.get('/api/movies', ctrl.getMovies)
app.put('/api/movies/:id', ctrl.updateMovie)
app.delete('/api/movies/:id', ctrl.deleteMovie)

app.listen(port, () => console.log(`Server running on ${port}`));