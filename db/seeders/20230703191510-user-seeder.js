"use strict";
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
// Generate fake tag data
function generateUser(index) {
  const user = {
    id: nanoid(10),
    firstname: faker.person.firstName({
      length: { min: 5, max: 7 },
      strategy: "fail",
    }),
    lastname: faker.person.lastName({
      length: { min: 5, max: 7 },
      strategy: "fail",
    }),
    username: faker.person.firstName() + faker.person.lastName(),
    email: `${faker.person.firstName().toLowerCase() + faker.person.lastName().toLowerCase()}@gmail.com`,
    phoneNumber: `68098989${index}`,
    whatsappNumber: `68098989${index}`,
    city: faker.location.city(),
    country: faker.location.country(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    password: bcrypt.hashSync(`Password@2023${index}`, 10),
    // imageBannerUrl:faker.image.urlPicsumPhotos(),
    createdAt: new Date(),
    updatedAt: new Date(),
    avatar: faker.image.avatar(),
    authStrategy: "local-auth",
    verified: false,
  };
  return user;
}

// Generate an array of fake users
function generateUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUser(i));
  }
  return users;
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
    await queryInterface.bulkInsert("user", generateUsers(10), {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user", null, {});
  },
};
