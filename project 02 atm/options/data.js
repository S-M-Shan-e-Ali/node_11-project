import { faker } from "@faker-js/faker";
export { createUser };
//create arrow function
const createUser = () => {
    let users = [];
    for (let i = 0; i <= 1000; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(1000000000 * Math.random() * 9000),
            balance: 1000000 * i,
        };
        users.push(user); //value push in array
    }
    return users; // return value in function
};
