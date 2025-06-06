const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
} = require('../controllers/productController');

const Product = require('../models/Product'); // Import model directly for bulk route

const router = express.Router();

// Route: Get all products and Add single product
router.route('/')
  .get(getProducts)
  .post(createProduct);

// Route: Get a product by ID
router.route('/:id').get(getProduct);

// 🔥 Route: Bulk Add Products
router.post('/bulk-add', async (req, res) => {
  try {
    const products = await Product.insertMany(req.body); // Insert multiple products
    res.status(201).json({
      success: true,
      message: `${products.length} products added`,
      data: products
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
