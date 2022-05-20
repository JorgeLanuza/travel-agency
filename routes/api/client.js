const router = require('express').Router();
const { update, getById, deleteById, getAll } = require('../../models/client.model');

router.get('/', (req, res) => {
  getAll()
    .then(result => res.json(result))
    .catch(error => res.json({ error: error.message }));
})

router.post('/', async (req, res) => {
  try {
    const result = await create(req.body)
    const newClient = await getById(result.insertId)
    res.json(result.insertId)
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.put('/:clientId', async (req, res) => {
  try {
    const result = await update(req.params.clientId, req.body)
    const modClient = getById(req.params.clientId)
    res.json(modClient)
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.delete('/:clientId', (req, res) => {
  deleteById(req.params.clientId)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }));
})


module.exports = router