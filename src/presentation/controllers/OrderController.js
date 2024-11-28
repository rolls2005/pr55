// src/presentation/controllers/OrderController.js
const OrderService = require("../../application/services/OrderService");

class OrderController {
  async createOrder(request, reply) {
    try {
      const { userId, productDetails } = request.body;
      await OrderService.createOrder(userId, productDetails);
      reply.code(201).send(null);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }

  async getOrderById(request, reply) {
    try {
      const order = await OrderService.getOrderById(request.params.id);

      if (!order) {
        reply.code(404).send({ error: "Order not found" });
      } else {
        reply.send(order);
      }
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }

  async getOrdersByUser(request, reply) {
    try {
      const orders = await OrderService.getOrdersByUser(request.params.id);
      console.log(orders);
      reply.send(orders);
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  }
}

module.exports = new OrderController();
