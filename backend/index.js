// import recipeRoutes from './recipeRoutes.js';

const dotenv = require('dotenv'),
  { Client } = require('pg'),
   express = require('express'),
  path = require('path')

const app = express()

dotenv.config()

  const client = new Client({
    connectionString: process.env.PGURI
  })

  client.connect()

// app.get('/api', (_request, response) => {
//   response.send({ hello: 'World' })
// })

// client.query används för att interagera med databasen:
// app.get('/api', async (_request, response) => {
//   const { rows } = await client.query(
//     'SELECT * FROM cities WHERE name = $1',
//     ['Stockholm']
//   )

app.get('/api', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM recipes'
  )

  response.send(rows)
})

app.use(express.static(path.join(path.resolve(), 'dist')))
// app.use(recipeRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
