// apiRouter.js
const express = require('express');
const endpoints = require('../controllers/api'); // 

const router = express.Router();

router.get('/welcome', endpoints.welcome); // 
router.get('/getRecentBlockhash', endpoints.getRecentBlockhash); // 
router.get('/getBalance/:address', endpoints.getBalance); // 
router.get('/getTokenBalance/:address', endpoints.getTokenBalance); //



module.exports = router;
