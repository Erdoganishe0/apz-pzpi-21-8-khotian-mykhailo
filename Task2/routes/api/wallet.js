const express = require('express');
const router = express.Router();
const walletController = require('../../controllers/walletController');
const verifyJWT = require('../../middleware/verifyJWT');


// router.route('/')
//     .get(verifyJWT, userController.getUser)
//     .put(verifyJWT, userController.updateUser);

// router.route('/:id')
//     .get(verifyJWT, userController.getUserById);

router.route('/')
    .get(walletController.getWalletDetais)

module.exports = router;