// import recipeRoutes from './recipeRoutes.js';
// const recipes = require('./routes/recipe')

const dotenv = require("dotenv"),
  { Client } = require("pg"),
  express = require("express");
path = require("path");

const app = express();
app.use(express.json());
dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/api/recipes/:id", async (_request, response) => {
  const { id } = _request.params;
  const { rows } = await client.query("SELECT * FROM recipes WHERE id = $1", [
    id,
  ]);

  response.send(rows);
});

app.get("/api/courses", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM courses");

  response.send(rows);
});

app.post("/add-course", async (req, res) => {
  const { name } = req.body; // Anta att vi får namnet på kursen i body

  try {
    // Lägg till kursen i databasen
    const result = await client.query(
      "INSERT INTO courses (name) VALUES ($1) RETURNING *",
      [name]
    );

    // Skicka tillbaka den nyss skapade kursen
    res.status(201).send({
      message: "New course added successfully",
      course: result.rows[0], // Den nyss skapade kursen
    });
  } catch (error) {
    console.error("Error adding course:", error);
    res.status(500).send({
      message: "Failed to add course",
      error: error.message,
    });
  }
});

// Enkel DELETE-endpoint för att ta bort en kurs
app.delete("/api/courses/:id", (req, res) => {
  const courseId = req.params.id;

  client.query("DELETE FROM courses WHERE id = $1", [courseId], (err) => {
    res.status(err ? 500 : 204).send(); // Skicka 500 vid fel, annars 204
  });
});

app.get("/api/recipes", async (_request, response) => {
  const { rows } = await client.query(
    "SELECT recipes.id, recipes.name, recipes.cook_time, recipes.description, recipes.img_url, recipes.servings, courses.name AS course_name FROM recipes INNER JOIN courses ON recipes.course = courses.id"
  );

  response.send(rows);
});

// Add new recipe
app.post("/api/new-recipe", async (req, res) => {
  const { name, cook_time, description, img_url, servings, course_id } =
    req.body;

  const { rows } = await client.query(
    `INSERT INTO recipes (name, cook_time, description, img_url, servings, course)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [name, cook_time, description, img_url, servings, course_id]
  );

  res.send(rows[0]);
});

app.use(express.static(path.join(path.resolve(), "dist")));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`);
});
