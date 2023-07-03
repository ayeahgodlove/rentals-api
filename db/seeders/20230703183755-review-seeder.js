"use strict";

const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

// Generate fake tag data
function generateReview(userId) {
  const review = {
    id: nanoid(10),
    comment: faker.word.sample({ length: 25, strategy: "longest" }),
    rating: faker.number.int({ min: 1, max: 5 }),
    userId: userId,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  };
  return review;
}

// Generate an array of fake reviews
function generateReviews(count, users) {
  const reviews = [];
  for (let i = 0; i < count; i++) {
    // const {} = store[i]
    reviews.push(generateReview(users[i].id));
  }
  return reviews;
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
    const users = await queryInterface.sequelize.query(`SELECT id FROM "user";`);
      // console.log("USERS: ", users)
    await queryInterface.bulkInsert(
      "reviews_tbl",
      generateReviews(10, users[0]),
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
    await queryInterface.bulkDelete("user", null, {});
    await queryInterface.bulkDelete("reviews_tbl", null, {});
  },
};
