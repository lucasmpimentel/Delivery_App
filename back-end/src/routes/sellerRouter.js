const sellerRouter = require('express').Router();
const { validateStatus } = require('../middleware/middleware.status');
const {
    updateStatus,
    getSeller,
    getSaleSeller,
} = require('../controllers/controller.seller');

sellerRouter.patch('/:id', validateStatus, updateStatus);
sellerRouter.get('/', getSeller);
sellerRouter.get('/:id', getSaleSeller);

module.exports = sellerRouter;
