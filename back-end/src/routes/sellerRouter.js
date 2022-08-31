const sellerRouter = require('express').Router();
const { validateStatus } = require('../middleware/middleware.status');
const {
    updateStatus,
    getSeller,
} = require('../controllers/controller.seller');

sellerRouter.patch('/seller/:id', validateStatus, updateStatus);
sellerRouter.get('/seller', getSeller);

module.exports = sellerRouter;
