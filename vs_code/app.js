const { Client } = require('pg');
const client = new Client({
user: 'TryMes',
host: 'data1.hib.no',
database: 'TryMes',
password: 'pass',
port: 5434,
})

client.connect()

client.query("SET search_path TO 'bruker_tabeller';")

client.query('SELECT* from kategori', (err, res) => {
console.log(err, res)
client.end()
})
