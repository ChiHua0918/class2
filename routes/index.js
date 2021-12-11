var express = require('express');
var router = express.Router();

// 真的建立連線
// req.db.connect();
// 監聽 router (連線)
router.get('/', function (req, res, next) {
  // query
  req.db.query('SELECT * from user WHERE id = 1', function (err, rows, fields) {
    // 如果有 error 就會終止程式 (throw err)
    if (err) console.log(err);
    // 物件.屬性
    console.log(rows[0].id);
    res.render('index', { title: '軟工課輔',username:rows[0].username});
  });
});
// req.db.query('INSERT INTO `user`(`username`, `passwd`) VALUES (?,?)',function(err,rows,fields){
//   let username = "rita";
//   let passwd = "123";
//   return username,passwd;
// })

// connection.end();
module.exports = router;
