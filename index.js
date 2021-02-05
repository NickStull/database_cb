const inquirer = require('inquirer');
const { createAuction, readProducts, productList, cb, exitAuction } = require('./greatBayDB');
readProducts();
console.log(cb());

const initQs = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What would you like to do?",
                choices: ["POST", "BID", "EXIT"],
                name: 'choice'
            }
        ])
        .then(({ choice }) => {
            switch (choice) {
                case "POST": postQs();
                    break;
                case "BID": bidQs();
                    break;
                default: exitApp();
            }
        });
};

const postQs = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of the product?",
                name: 'item'
            },
            {
                type: 'input',
                message: "What is the category of the product?",
                name: 'category'
            },
            {
                type: 'input',
                message: "What is the starting bid?",
                name: 'startingBid'
            }
        ])
        .then(({ item, category, startingBid }) => {
            createAuction(item, category, startingBid)
            initQs();
        })
};

const bidQs = () => {
    // readProducts()
    console.log(readProducts());
    // initQs();
}


const exitApp = () => {
    exitAuction();
}



initQs();