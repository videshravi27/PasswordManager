const express = require('express')
const {
    getDetails,
    getDetail,
    createDetail,
    deleteDetail,
    updateDetail
} = require('../controllers/detailController') 
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require Auth for all routes
router.use(requireAuth)

//GET ALL 
router.get('/', getDetails)

//GET A SINGLE
router.get('/:id', getDetail)

//POST 
router.post('/', createDetail)

//Delete
router.delete('/:id', deleteDetail)

//Update
router.patch('/:id', updateDetail)

module.exports = router;