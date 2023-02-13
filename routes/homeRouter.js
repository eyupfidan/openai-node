const express = require('express')
const router = express.Router()
const { getQuestion } = require('../controllers/homeController.js')


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.post('/', getQuestion)

module.exports = router