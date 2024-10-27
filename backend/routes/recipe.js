// import Router from 'express-promise-router'
// import db from '../db.js'

// // create a new express-promise-router
// // this has the same API as the normal express router except
// // it allows you to use async functions as route handlers
// const router = new Router()

// // export our router to be mounted by the parent application
// export default router

// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   const { rows } = await db.query('SELECT * FROM recipes WHERE id = $1', [id])
//   res.send(rows[0])
// })

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly
import * as db from '../db/index.js'

app.get('/:id', async (req, res, next) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id])
  res.send(result.rows[0])
})

// ... many other routes in this file
