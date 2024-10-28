// import recipeRoutes from './recipeRoutes.js';
// const recipes = require('./routes/recipe')

const dotenv = require('dotenv'),
  { Client } = require('pg'),
   express = require('express')
  path = require('path')

const app = express()

dotenv.config()

  const client = new Client({
    connectionString: process.env.PGURI
  })

  client.connect()

app.get('/api/recipes', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM recipes'
  )

  response.send(rows)
})


app.get('/api/recipes/:id', async (_request, response) => {
  const { id } = _request.params;
  const { rows } = await client.query(
    'SELECT * FROM recipes WHERE id = $1', [id]
  )

  response.send(rows)
})

app.get('/api/courses', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM courses'
  )

  response.send(rows)
})

app.get('/api/getAll', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT recipes.id, recipes.name, recipes.cook_time, courses.name AS course_name FROM recipes INNER JOIN courses ON recipes.course = courses.id'
  )

  response.send(rows)
})



app.use(express.static(path.join(path.resolve(), 'dist')))



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
