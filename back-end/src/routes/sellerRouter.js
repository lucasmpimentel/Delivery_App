const sellerRouter = require('express').Router();
const { validateStatus } = require('../middleware/middleware.status');
const {
    updateStatus,
} = require('../controllers/controller.seller');

sellerRouter.patch('/seller/:id', validateStatus, updateStatus);

module.exports = sellerRouter;
