const express = require("express");
const app = express();
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newFake = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      password:faker.internet.password(),
      email:faker.internet.email(),
      phoneNumber:faker.phone.number(),
      id:faker.number.int(),
    };
    return newFake;
};
    
const createCompany = () => {
  const newFake = {
    name: faker.company.name(),
    id:faker.number.int(),
    address:{
      street:faker.location.street(),
      city:faker.location.city(),
      state:faker.location.state(),
      zipCode:faker.location.zipCode(),
      country:faker.location.country()
    }
  };
  return newFake;
};



/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  const comp=createCompany();
  res.json(comp);
});

app.get("/api/user/company", (req, res) => {
  res.json({"company":createCompany(),"user":createUser()});
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
