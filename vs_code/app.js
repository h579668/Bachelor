/*
* This code connects node.js to the database(postgreSQL), stored in dBeaver.
*/

// Creating the client, and prepare to connect
const { Client } = require('pg');
const client = new Client({
user: 'TryMes',
host: 'data1.hib.no',
database: 'TryMes',
password: 'pass',
port: 5434,
})

//Connecting to the database
client.connect()

//setting the path to bruker_tabeller
client.query("SET search_path TO 'bruker_tabeller';")

//Just a check to see if all the categories "kategorier" can be fiund,
// and printed in the console.
client.query('SELECT* from kategori', (err, res) => {
console.log(err, res)
client.end()
})
 
