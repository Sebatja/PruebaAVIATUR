const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    
    res.render('index',{title :'first Website'});
 
 });
 module.exports = router;