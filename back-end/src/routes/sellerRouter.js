const sellerRouter = require('express').Router();

const {
    updateStatus,
} = require('../controllers/controller.seller');

sellerRouter.put('/seller/:id', updateStatus);

module.exports = sellerRouter;