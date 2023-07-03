'use strict';

const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

// Generate fake tag data
function generateProductImage(productId) {
  const product = {
    id: nanoid(10),
    productName: faker.word.adjective({
      length: { min: 5, max: 7 },
      strategy: "fail",
    }),
    imageUrl: faker.image.urlPicsumPhotos(),
    productId: productId,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  };
  return product;
}

// Generate an array of fake products
function generateProductImages(count, stores) {
  const products = [];
  for (let i = 0; i < count; i++) {
    // const {} = stores[i]
    products.push(generateProductImage(stores[i].id));
  }
  return products;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const products = await queryInterface.sequelize.query(
      `SELECT id FROM product;`
    );


    await queryInterface.bulkInsert(
      "productImage",
      generateProductImages(10, products[0]),
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("product", null, {});
    await queryInterface.bulkDelete("productImage", null, {});
  }
};
