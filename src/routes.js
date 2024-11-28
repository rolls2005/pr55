const UserController = require("./presentation/controllers/UserController");
const OrderController = require("./presentation/controllers/OrderController");
const ProductController = require("./presentation/controllers/ProductController");

async function routes(fastify, options) {
  fastify.post(
    "/users",
    {
      schema: {
        summary: "Create a new user",
        description: "Creates a new user in the system.",
        body: {
          type: "object",
          properties: {
            username: { type: "string", description: "Name of the user" },
            password: { type: "string", description: "Password of the user" },
          },
          required: ["username", "password"],
        },
      },
    },
    UserController.createUser
  );
  fastify.get(
    "/users/:id",
    {
      schema: {
        summary: "Get user by ID",
        description: "Fetches a user by their unique ID.",
        params: {
          type: "object",
          properties: {
            id: { type: "string", description: "Unique ID of the user" },
          },
        },
        response: {
          200: {
            description: "User data retrieved successfully",
            type: "object",
            properties: {
              _id: { type: "string" },
              username: { type: "string" },
              password: { type: "string" },
            },
          },
          404: {
            description: "User not found",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    UserController.getUserById
  );
  fastify.get(
    "/users",
    {
      schema: {
        summary: "Get all users",
        description: "Fetches all users in the system.",
        response: {
          200: {
            description: "List of users retrieved successfully",
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: { type: "string" },
                username: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
    },
    UserController.getAllUsers
  );

  fastify.post(
    "/orders",
    {
      schema: {
        summary: "Create a new order",
        description: "Creates a new order linked to a specific user.",
        body: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              description: "ID of the user placing the order",
            },
            productDetails: {
              type: "array",
              description: "Details of products in the order",
              items: {
                type: "object",
                properties: {
                  productId: {
                    type: "string",
                    description: "ID of the product",
                  },
                  quantity: {
                    type: "integer",
                    description: "Quantity of the product",
                    minimum: 1,
                  },
                },
              },
            },
          },
          required: ["userId", "productDetails"],
        },
      },
    },
    OrderController.createOrder
  );
  fastify.get(
    "/orders/:id",
    {
      schema: {
        summary: "Get order by ID",
        description: "Fetches an order by its unique ID.",
        params: {
          type: "object",
          properties: {
            id: { type: "string", description: "Unique ID of the order" },
          },
        },
        response: {
          200: {
            description: "Order data retrieved successfully",
            type: "object",
            properties: {
              _id: { type: "string" },
              userId: { type: "string" },
              products: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    name: { type: "string" },
                    price: { type: "number" },
                  },
                },
              },
              totalAmount: { type: "number" },
            },
          },
          404: {
            description: "Order not found",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    OrderController.getOrderById
  );
  fastify.get(
    "/users/:id/orders",
    {
      schema: {
        summary: "Get orders by user ID",
        description: "Fetches all orders linked to a specific user.",
        params: {
          type: "object",
          properties: {
            id: { type: "string", description: "Unique ID of the user" },
          },
        },
        response: {
          200: {
            description: "List of orders retrieved successfully",
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: { type: "string" },
                userId: { type: "string" },
                products: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: { type: "string" },
                      name: { type: "string" },
                      price: { type: "number" },
                    },
                  },
                },
                totalAmount: { type: "number" },
              },
            },
          },
        },
      },
    },
    OrderController.getOrdersByUser
  );

  fastify.post(
    "/products",
    {
      schema: {
        summary: "Create a new product",
        description: "Creates a new product in the system.",
        body: {
          type: "object",
          properties: {
            name: { type: "string", description: "Name of the product" },
            price: { type: "number", description: "Price of the product" },
          },
          required: ["name", "price"],
        },
      },
    },
    ProductController.createProduct
  );

  fastify.get(
    "/products/:id",
    {
      schema: {
        summary: "Get product by ID",
        description: "Fetches a product by its unique ID.",
        params: {
          type: "object",
          properties: {
            id: { type: "string", description: "Unique ID of the product" },
          },
        },
        response: {
          200: {
            description: "Product data retrieved successfully",
            type: "object",
            properties: {
              _id: { type: "string" },
              name: { type: "string" },
              price: { type: "number" },
            },
          },
          404: {
            description: "Product not found",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    ProductController.getProductById
  );

  fastify.get(
    "/products",
    {
      schema: {
        summary: "Get all products",
        description: "Fetches all products in the system.",
        response: {
          200: {
            description: "List of products retrieved successfully",
            type: "array",
            items: {
              type: "object",
              properties: {
                _id: { type: "string" },
                name: { type: "string" },
                price: { type: "number" },
              },
            },
          },
        },
      },
    },
    ProductController.getAllProducts
  );
}

module.exports = routes;
