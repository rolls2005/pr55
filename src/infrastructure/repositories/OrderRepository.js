const Order = require("../models/order");

class OrderRepository {
  async createOrder(orderData) {
    return await Order.createOrder(orderData);
  }

  async getOrderById(orderId) {
    return await Order.getOrderById(orderId);
  }

  async getOrdersByUser(userId) {
    return await Order.getOrdersByUser(userId);
  }
}

module.exports = new OrderRepository();
