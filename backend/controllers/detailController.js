const mongoose = require('mongoose')
const Detail = require('../models/detailModel')

//Get all Data
const getDetails = async (req, res) => {
    const user_id = req.user._id
    const details = await Detail.find({user_id}).sort({});
    res.status(200).json(details)
}

//Get a single data
const getDetail = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such data'})
    }
    const detail = await Detail.findById(id)

    if(!detail){
        return res.status(404).json({error: 'No such data'})
    }
    res.status(200).json(detail)
}

//Post a new data
const createDetail = async (req, res) => {
    const {website, url, username, password} = req.body

    let emptyFields = []
    if(!website){
        emptyFields.push('website')
    }
    if(!url){
        emptyFields.push('url')
    }
    if(!username){
        emptyFields.push('username')
    }
    if(!password) {
        emptyFields.push('password')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try{
        const user_id = req.user._id
        const detail = await Detail.create({website, url, username, password, user_id})
        res.status(200).json(detail)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a data
const deleteDetail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such data' });
    }
    const detail = await Detail.findOneAndDelete({_id: id});
    
    if (!detail) {
        return res.status(400).json({ error: 'No such data' });
    }
    res.status(200).json(detail);
}

//update a data
const updateDetail = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such data' });
    }
    const detail = await Detail.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!detail) {
        return res.status(400).json({ error: 'No such data' });
    }
    res.status(200).json(detail);
}

module.exports = {
    getDetails,
    getDetail,
    createDetail,
    deleteDetail,
    updateDetail 
}