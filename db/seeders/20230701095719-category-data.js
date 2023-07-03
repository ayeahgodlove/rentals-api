"use strict";

const { nanoid } = require("nanoid");
const { faker }  = require('@faker-js/faker');

// Generate fake category data
function generateCategory() {
  const category = {
    id: nanoid(10),
    name: faker.word.adjective({ length: { min: 5, max: 7 }, strategy: "fail" }),
    slug: faker.lorem.slug(),
    description: faker.lorem.sentence(),
    createdAt: new Date(),
    updatedAt: new Date()
  };
  return category;
}

// Generate an array of fake categories
function generateCategories(count) {
  const categories = [];
  for (let i = 0; i < count; i++) {
    categories.push(generateCategory());
  }
  return categories;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert the seed data into the database
    await queryInterface.bulkInsert('category', generateCategories(10), {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data from the database
    await queryInterface.bulkDelete('category', null, {});
  },
};