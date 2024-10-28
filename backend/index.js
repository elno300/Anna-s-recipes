// import recipeRoutes from './recipeRoutes.js';
const recipes = require('./routes/recipe')

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

app.get('/api', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT * FROM recipes'
  )

  response.send(rows)
})

// GET-request till /api/recipes
app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await client.query("SELECT * FROM recipes"); // Databasanrop
    // res.json(recipes.rows);
    response.send(recipes)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }

});

app.use(express.static(path.join(path.resolve(), 'dist')))
app.use(recipes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
