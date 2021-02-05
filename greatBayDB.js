const mysql = require("mysql");
const productList = [];

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "greatBay_DB"
});

// connection.connect((err) => {
//     if (err) throw err;
//     console.log('connected as id ' + connection.threadId);
//     connection.end();
//   });

const createAuction = (item, category, startingBid) => {
    console.log("Inserting a new auction...\n");
    var query = connection.query(
      "INSERT INTO auctions SET ?",
      {
        item_name: `${item}`,
        category: `${category}`,
        starting_bid: startingBid
      },
      function(err, res) {
        if (err) throw err;
      }
    );
};

const readProducts = () => {
  connection.query("SELECT item_name FROM auctions", function(err, res) {
        if (err) throw err;
        res.forEach(product => {
            productList.push(product.item_name);
          });
          // console.log(productList);
          return cb(productList);   
        });
       
        
};

const cb = (list) => {
  return list;
}

const exitAuction = () => {
    console.log("Have a great day!");
    connection.end();
};

//console.log(readProducts(cb));

module.exports = {
createAuction,
readProducts,
productList,
// test,
cb,
exitAuction
};