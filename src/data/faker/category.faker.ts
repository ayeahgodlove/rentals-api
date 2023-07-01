import { nanoid } from "nanoid";
import { faker } from '@faker-js/faker';

import { ICategory } from "../../domain/models/category";
// Generate fake category data
function generateCategory() {
  const category: ICategory = {
    id: nanoid(10),
    name: faker.commerce.department(),
    slug: faker.lorem.slug(),
    description: faker.lorem.sentence(),
    createdAt: new Date(),
    updatedAt: new Date()
  };
  return category;
}

// Generate an array of fake categories
export function generateCategories(count: number) {
  const categories = [];
  for (let i = 0; i < count; i++) {
    categories.push(generateCategory());
  }
  return categories;
}

// Example usage
// const categories = generateCategories(10);
// console.log(categories);