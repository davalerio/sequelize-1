const express = require('express')
const router = express.Router()
const {
  signUp,
  updateSignUp,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  deleteAllusers
} = require('../controllers/user')

// ---------------------------- CUSTOM ROUTE -----------------------------------
router.post('/sign-up', signUp)
router.put('/sign-up/:id', updateSignUp)
router.get('/sign-up/', getAllUsers)
router.get('/sign-up/:id', getSingleUser)
router.delete('/sign-up/:id', deleteSingleUser)
router.delete('/sign-up/', deleteAllusers)

// --------------------------- EXPORT ROUTER -----------------------------------
module.exports = router
