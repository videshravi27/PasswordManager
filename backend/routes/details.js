const express = require('express')
const {
    getDetails,
    getDetail,
    createDetail,
    deleteDetail,
    updateDetail
} = require('../controllers/detailController') 

const router = express.Router()

//GET ALL 
router.get('/', getDetails)

//GET A SINGLE
router.get('/:id', getDetail)

//POST 
router.post('/post', createDetail)

//Delete
router.delete('/:id', deleteDetail)

//Update
router.patch('/:id', updateDetail)

module.exports = router;