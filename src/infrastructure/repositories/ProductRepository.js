const Product = require("../models/product");

class ProductRepository {
  async createProduct(productData) {
    return await Product.createProduct(productData);
  }

  async getProductById(productId) {
    return await Product.getProductById(productId);
  }

  async getAllProducts() {
    return await Product.getAllProducts();
  }
}

module.exports = new ProductRepository();
