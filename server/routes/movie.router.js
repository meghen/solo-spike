const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const Axios = require('axios')

router.get((req,res) =>{
    Axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${TMDB_API_KEY}`).then((response) => {
        console.log('response.data', response.data);
        res.send(response.data)
    }).catch ((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
});

module.exports = router;