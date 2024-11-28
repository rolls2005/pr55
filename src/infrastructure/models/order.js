const { getDb } = require("../db");
const { ObjectId } = require("mongodb");

const collectionName = "orders";

const createOrder = async (orderData) => {
  const db = getDb();
  await db.collection(collectionName).insertOne(orderData);
};

const getOrderById = async (orderId) => {
  const db = getDb();
  return await db
    .collection(collectionName)
    .findOne({ _id: ObjectId.createFromHexString(orderId) });
};

const getOrdersByUser = async (userId) => {
  const db = getDb();
  return await db
    .collection(collectionName)
    .find({ userId: userId })
    .toArray();
};

module.exports = { createOrder, getOrderById, getOrdersByUser };
