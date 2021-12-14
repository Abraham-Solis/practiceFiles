const router = require('express').Router()
const db = require('../db')

router.get('/todo', (req, res) => {
  db.query('SELECT * FROM todo', (err, users) => {
    if (err) { console.log(users) }
    res.json(users)
  })
})

router.post('/todo', (req, res) => {
  db.query('INSERT INTO todo SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router