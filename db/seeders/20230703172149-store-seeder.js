'use strict';
const { nanoid } = require("nanoid");
const { faker }  = require('@faker-js/faker');

// Generate fake tag data
function generateStore() {
  const store = {
    id: nanoid(10),
    name: faker.word.adjective({ length: { min: 5, max: 7 }, strategy: "fail" }),
    location: faker.location.city(),
    imageBannerUrl:faker.image.urlPicsumPhotos(), 
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return store;
}

// Generate an array of fake stores
function generateStores(count) {
  const stores = [];
  for (let i = 0; i < count; i++) {
    stores.push(generateStore());
  }
  return stores;
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
    await queryInterface.bulkInsert('store', generateStores(10), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('store', null, {});
  }
};
