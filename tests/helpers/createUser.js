module.exports = function(done){

  var User = require('../../app/models/user');

  User.create('XXXXX@gmail.com', 'XXXX', {}, function(err, user){
    if (err) return done(err);
    global.test_uid = user.uid;
    done()
  });
};