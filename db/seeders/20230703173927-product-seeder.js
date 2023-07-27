"use strict";
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

// Generate fake tag data
function generateProduct(storeId) {
  const product = {
    id: nanoid(10),
    name: faker.word.adjective({
      length: { min: 5, max: 7 },
      strategy: "fail",
    }),
    description: faker.word.sample({ length: 25, strategy: "shortest" }),
    longDescription: faker.word.sample({ length: 25, strategy: "longest" }),
    amount: faker.number.float(),
    durationOfRentage: faker.number.int({ min: 0, max: 12 }),
    condition: faker.word.verb({ strategy: "shortest" }),
    availabilityStartDate: faker.date.soon(),
    availabilityEndDate: faker.date.soon(),
    availabilityStartTime: faker.date.soon(),
    availabilityEndTime: faker.date.soon(),
    storeId: storeId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return product;
}

// Generate an array of fake products
function generateProducts(count, stores) {
  const products = [];
  for (let i = 0; i < count; i++) {
    // const {} = stores[i]
    products.push(generateProduct(stores[i].id));
  }
  return products;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const stores = await queryInterface.sequelize.query(
      `SELECT id FROM store;`
    );

    // console.log("STORES: ", stores[0])

    await queryInterface.bulkInsert(
      "product",
      generateProducts(10, stores[0]),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("store", null, {});
    await queryInterface.bulkDelete("product", null, {});
  },
};
