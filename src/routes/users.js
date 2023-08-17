const express = require('express')

const controllers = require('../controllers/users')

const router = express.Router()


const path = 'users'

router.get(
    `/${path}`,
    controllers.getData
)

module.exports = router