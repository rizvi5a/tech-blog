const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;


//  mysql://b2bca72ee75f3a:733c0fff@us-cdbr-east-04.cleardb.com/heroku_f4413b013f21869?reconnect=true
//  mysql://b2bca72ee75f3a:733c0fff@us-cdbr-east-04.cleardb.com/heroku_f4413b013f21869?reconnect=true

//  mysql://jer6vnj0is7ql68g:vo8f12ossf04y4v9@pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vzs1p3xykzas7xed

/*
h: pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
u: jer6vnj0is7ql68g
p: vo8f12ossf04y4v9

*/
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

   module.exports = sequelize;

// Set up MySQL connection.
//var mysql = require("mysql2");
//var connection;
//make connection
//if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else{
//   connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "Zuha329a",
//     database: "blog_db"
//   })
// }
// connection.connect();
// // Export connection for our ORM to use.
// module.exports = connection;

