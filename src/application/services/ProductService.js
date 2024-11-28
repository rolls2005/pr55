const ProductRepository = require("../../infrastructure/repositories/ProductRepository");

class ProductService {
  async createProduct(productData) {
    return await ProductRepository.createProduct(productData);
  }

  async getProductById(productId) {
    return await ProductRepository.getProductById(productId);
  }

  async getAllProducts() {
    return await ProductRepository.getAllProducts();
  }
}

module.exports = new ProductService();
