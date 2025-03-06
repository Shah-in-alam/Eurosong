var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   const users=[
//     {
//       id:1,
//       name:"Shahin"
//     },
//     {
//       id:1,
//       name:"Sidratul"
//     },
//   ];
//   console.log(users);
//   res.send('respond with a resource');
// });
router.get ('/',function(req,res,next){
  const data=[];
  res.json(data);
  //const indexRouter = require('./routes/index');
  // const usersRouter = require('./routes/users');
});




module.exports = router;
