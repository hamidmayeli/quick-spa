const { Faker, fa, en, base } = require("@faker-js/faker");

const faker = new Faker({
    locale: [fa, en, base],
  });

function createUser(){
    return {
            id: faker.number.int(),
            name: faker.internet.displayName(),
            avatar: faker.number.int({min: 1, max: 5}) === 3 ? null : faker.internet.avatar(),
        };
}

module.exports = () => ({
    user: faker.helpers.multiple(createUser, { count: 40 }),
});
