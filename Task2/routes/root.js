const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/index', 
    // add when authorized /main/index.html
    (req, res) => {
    console.log("dfsdf") 
    // res.sendFile(path.join(__dirname, '../../Task4/multi-vault/src',  'App.js'));
    res.json({message: "hui"})
}); 

module.exports = router;