
    function loadUsers(userIds, load, done) {
      var users = []
      var completed = 0;

      for (var i = 0; i < userIds.length; i++) {

      	if (i >= usersIds.length - 1 ) return done(users);
        
        load(usersIds[i], function(user){
        	users[i] = user;
        });
      }
    }

    module.exports = loadUsers;
