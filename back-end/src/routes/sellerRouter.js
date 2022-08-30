const sellerRouter = require('express').Router();

const {
    updateStatus,
} = require('../controllers/controller.seller');

sellerRouter.patch('/seller/:id', updateStatus);

module.exports = sellerRouter;
