// import Router from 'express-promise-router'
// import db from '../db.js'

// // // create a new express-promise-router
// // // this has the same API as the normal express router except
// // // it allows you to use async functions as route handlers
// const router = new Router()

// // // export our router to be mounted by the parent application
// // export default router

// // router.get('/:id', async (req, res) => {
// //   const { id } = req.params
// //   const { rows } = await db.query('SELECT * FROM recipes WHERE id = $1', [id])
// //   res.send(rows[0])
// // })

// // notice here I'm requiring my database adapter file
// // and not requiring node-postgres directly
// import * as db from '../db/index.js'

// app.get('/:id', async (req, res, next) => {
//   const result = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id])
//   res.send(result.rows[0])
// })

// // ... many other routes in this file
// routes/recipes.js
const express = require("express");
const router = express.Router();
const db = require("../db"); // Databaskoppling

// GET-request till /api/recipes
router.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await db.query("SELECT * FROM recipes"); // Databasanrop
    res.json(recipes.rows); // Skickar tillbaka data som JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Endpoint för att lägga till ett nytt recept
router.post('/api/recipes', async (req, res) => {
  const { name, description } = req.body;
  try {
    const result = await query(
      'INSERT INTO recipes (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Något gick fel vid skapande av nytt recept.' });
  }
});

// Endpoint för att ta bort ett recept baserat på ID
router.delete('/api/recipes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('DELETE FROM recipes WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Receptet hittades inte.' });
    }

    res.status(200).json({ message: 'Receptet har tagits bort.', recipe: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Något gick fel vid borttagning av recept.' });
  }
});

module.exports = router;
