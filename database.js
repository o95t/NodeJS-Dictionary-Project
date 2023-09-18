exports.queryWord = function (word, res) {
  const mysql = require('mysql');

  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'englishdictionary'
  });

  con.connect(function (err) {
    if (err) {
      console.error('Error connecting to database:', err);
      throw err;
    }
    console.log('Connected to database!');
  });

  var sql = `SELECT wordtype, definition FROM entries WHERE word = ?`;
  con.query(sql, [word], function (err, data) {
    if (err) {
      console.error('Error executing SQL query:', err);
      throw err;
    }
    res.json(data);
    console.log('Query result:', data);
  });

  con.end(function (err) {
    if (err) {
      console.error('Error disconnecting from database:', err);
      throw err;
    }
    console.log('Disconnected from database!');
  });
};