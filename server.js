const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response

// remember to use import and NOT require
// we can create a function to return a random / fake "Product"

    

app.get("/api/user/new", (req, res) => {
    res.json(newFakeUser);
});
app.get("/api/new/company", (req, res) => {
        res.json(newFakeCompany);
    });
app.get("/api/user/company", (req, res) => {
        res.json([newFakeUser,newFakeCompany]);
        });
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );



const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};
    
const newFakeUser = createUser();


const createCompany = () => {
    const newCompany = {
        name: faker.company.companyName(),
        
        phoneNumber: faker.phone.number(),
        id: faker.datatype.uuid(),
        address: {city:faker.address.city(),state:faker.address.state(),zipCode:faker.address.zipCode(),country:faker.address.country()}
    };
    return newCompany;
};
    
const newFakeCompany = createCompany();
