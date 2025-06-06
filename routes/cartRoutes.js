const express = require('express');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
} = require('../controllers/cartController');
const { protect } = require('../middlewares/auth');

const router = express.Router();

// Protect all routes
router.use(protect);

router.route('/').get(getCart).post(addToCart);
router.route('/:itemId').put(updateCartItem).delete(removeCartItem);

module.exports = router;