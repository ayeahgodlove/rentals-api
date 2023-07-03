'use strict';
const { nanoid } = require("nanoid");
const { faker }  = require('@faker-js/faker');

// Generate fake tag data
function generateTag() {
  const tag = {
    id: nanoid(10),
    name: faker.word.adjective({ length: { min: 5, max: 7 }, strategy: "fail" }),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date()
  };
  return tag;
}

// Generate an array of fake tags
function generateTags(count) {
  const tags = [];
  for (let i = 0; i < count; i++) {
    tags.push(generateTag());
  }
  return tags;
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
    await queryInterface.bulkInsert('tag', generateTags(10), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tag', null, {});
  }
};
