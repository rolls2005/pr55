const ProductService = require("../../application/services/ProductService");

class ProductController {
  async createProduct(request, reply) {
    try {
      await ProductService.createProduct(request.body);
      reply.code(201).send(null);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }

  async getProductById(request, reply) {
    try {
      const product = await ProductService.getProductById(request.params.id);
      if (!product) {
        reply.code(404).send({ error: "Product not found" });
      } else {
        reply.send(product);
      }
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }

  async getAllProducts(request, reply) {
    try {
      const products = await ProductService.getAllProducts();
      reply.send(products);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }
}

module.exports = new ProductController();
