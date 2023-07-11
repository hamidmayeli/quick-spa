const { Faker, fa, en, base } = require("@faker-js/faker");

const faker = new Faker({
    locale: [fa, en, base],
  });

  const authentication = (req, res, next) => {
    if (req.path === "/login" && req.method === "POST") {
        if(req.body.verificationCode === 123456){
            res.jsonp({
                id: faker.number.int(),
                name: faker.person.fullName(),
                avatar: faker.internet.avatar(),
                token: "the-token",
            });
        }
        res.status(204).end();
    }
    else {
        next();
    }
};

const root = (req, res, next) => {
    if ((req.path === "/" || req.path === "") && req.method === "HEAD") {
        res.status(200).end();
    }
    else {
        authentication(req, res, next);
    }
};

module.exports = root;
