const express = require('express');
const router = express.Router();


const Rooms = require('../models/room');


router.get('/getallrooms', async (req, res) => {
    
    try{
        const rooms = await Rooms.find();
        res.send(rooms);

    }catch(err){
        return res.status(400).json({message: err});
    }
});

module.exports = router;