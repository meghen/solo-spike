const express = require('express');
const router = express.Router();
// const pool = require('../modules/pool.js');
const Axios = require('axios')

router.get('/', (req,res) =>{
    console.log('got get from client');
    
    Axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.TMDB_API_KEY}`)
    .then((response) => {
        console.log('API response', response);
        res.send(response.data)
    }).catch ((error) => {
        console.log('server error', error);
        res.sendStatus(500);
    })
});

module.exports = router;