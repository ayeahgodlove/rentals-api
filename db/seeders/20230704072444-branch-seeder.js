'use strict';
const { nanoid } = require("nanoid");
const { faker }  = require('@faker-js/faker');

// Generate fake tag data
function generateBranch() {
  const branch = {
    id: nanoid(10),
    name: faker.word.adjective({ length: { min: 5, max: 7 }, strategy: "fail" }),
    town: faker.location.city(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date()
  };
  return branch;
}

// Generate an array of fake branchs
function generateBranchs(count) {
  const branchs = [];
  for (let i = 0; i < count; i++) {
    branchs.push(generateBranch());
  }
  return branchs;
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
    await queryInterface.bulkInsert('branch', generateBranchs(10), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('branch', null, {});
  }
};
