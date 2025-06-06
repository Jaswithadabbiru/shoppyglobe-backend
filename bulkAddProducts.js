const axios = require('axios');

const products = [
  { name: "Kurti", price: 50.0, description: "Traditional women Kurti", stock: 20, category: "women" },
  { name: "Jeans", price: 60.0, description: "Men's stylish jeans", stock: 15, category: "men" },
  { name: "Saree", price: 75.0, description: "Elegant women's saree", stock: 10, category: "women" },
  { name: "Jacket", price: 90.0, description: "Men's warm jacket", stock: 8, category: "men" },
  { name: "T-Shirt", price: 45.0, description: "Cool men's T-Shirt", stock: 25, category: "men" },
  { name: "Dress", price: 85.0, description: "Beautiful women’s dress", stock: 18, category: "women" },
  { name: "Hoodie", price: 95.0, description: "Comfy men's hoodie", stock: 12, category: "men" },
  { name: "Leggings", price: 55.0, description: "Stylish women’s leggings", stock: 22, category: "women" },
  { name: "Shirt", price: 70.0, description: "Casual men's shirt", stock: 20, category: "men" },
  { name: "Jumpsuit", price: 88.0, description: "Trendy women's jumpsuit", stock: 16, category: "women" },
  { name: "Sweater", price: 92.0, description: "Warm men’s sweater", stock: 14, category: "men" },
  { name: "Gown", price: 99.0, description: "Elegant women’s gown", stock: 10, category: "women" },
  { name: "Shorts", price: 40.0, description: "Men’s casual shorts", stock: 25, category: "men" },
  { name: "Top", price: 52.0, description: "Casual women’s top", stock: 30, category: "women" },
  { name: "Kurta", price: 78.0, description: "Traditional men's kurta", stock: 18, category: "men" },
  { name: "Skirt", price: 73.0, description: "Stylish women’s skirt", stock: 20, category: "women" },

  { name: "Denim Shirt", price: 85.0, description: "Kid's denim shirt", stock: 12, category: "kid" },
  { name: "Cargo Pants", price: 88.0, description: "Kid's cargo pants", stock: 14, category: "kid" },
  { name: "Trousers", price: 76.0, description: "Kid's trousers", stock: 16, category: "kid" },
  { name: "Tank Top", price: 49.0, description: "Kid's tank top", stock: 20, category: "kid" },
  { name: "Formal Pants", price: 98.0, description: "Kid's formal pants", stock: 12, category: "kid" },
  { name: "Leather Jacket", price: 150.0, description: "Kid's leather jacket", stock: 8, category: "kid" },
  { name: "Gym Shorts", price: 55.0, description: "Kid's gym shorts", stock: 20, category: "kid" },
  { name: "Casual Blazer", price: 105.0, description: "Kid's casual blazer", stock: 10, category: "kid" }
];

const addProducts = async () => {
  for (const product of products) {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/products', product);
      console.log(`Added product: ${res.data.data.name}`);
    } catch (error) {
      console.error(`Failed to add product: ${product.name}`, error.response?.data || error.message);
    }
  }
};

addProducts();