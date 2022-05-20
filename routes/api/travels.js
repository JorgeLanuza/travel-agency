const router = require('express').Router();
const { update, getById, deleteById, getAll, newTravelClient } = require('../../models/travel.model');

router.get('/', (req, res) => {
  getAll()
    .then(result => res.json(result))
    .catch(error => res.json({ error: error.message }));
})

router.post('/', async (req, res) => {
  try {
    const result = await create(req.body)
    const newTravel = await getById(result.insertId)
    res.json(newTravel)
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.put('/:travelId', async (req, res) => {
  try {
    const result = await update(req.params.travelId, req.body)
    const travelUpdated = getById(req.params.travelId)
    res.json(travelUpdated)
  } catch (error) {
    res.json({ error: error.message })
  }
})

router.delete('/:travelId', (req, res) => {
  const travelId = req.params.clientId;
  if (travelId === null) {
    res.json({ error: 'Travel ID is required' })
  }
  deleteById(req.params.travelId)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }));
})

router.post("/:idTravel/client/:idClient", async (req, res) => {
  try {
    const idClient = req.params.idClient;
    const idTravel = req.params.idTravel;
    const travelClient = await newTravelClient(idClient, idTravel);
  } catch (error) {
    res.send({ error: err.message })
  }
})


module.exports = router