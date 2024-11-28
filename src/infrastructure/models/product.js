const { getDb } = require("../db");
const { ObjectId } = require("mongodb");

const collectionName = "products";

const createProduct = async (productData) => {
  const db = getDb();
  await db.collection(collectionName).insertOne(productData);
};

const getProductById = async (productId) => {
  const db = getDb();
  return await db
    .collection(collectionName)
    .findOne({ _id: ObjectId.createFromHexString(productId) });
};

const getAllProducts = async () => {
  const db = getDb();
  return await db.collection(collectionName).find().toArray();
};

module.exports = { createProduct, getProductById, getAllProducts };
