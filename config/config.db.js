import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 5306,
  database: 'appRemiseria',
})


export default connection