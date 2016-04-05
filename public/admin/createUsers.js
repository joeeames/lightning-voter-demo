angular.module('app').component('adminCreateUsers', {
  templateUrl: '/admin/createUsers.html',
  bindings: {
    users: '=',
    sessions: '=',
    reviewedSessions: '='
  },
  controller: function(parseNames, $firebaseAuthService, $firebaseRef, $firebaseObject, toastr) {
    
    var usersObj = $firebaseObject($firebaseRef.default.child('users'));
    
    this.import = function() {
      var people = parseNames(this.namesblob);
      people.forEach((function(person) {
        console.log(person);
        $firebaseAuthService.$createUser({
          email: person.email,
          password: "pass"
        }).then(function(userdata) {
          // this.users.$add(person);
          usersObj[userdata.uid] = person;
          console.log(usersObj);
          usersObj.$save();
        }).catch((function(error) {
          toastr.error("User already exists: " + person.email)
        }).bind(this))
      }).bind(this));
      
      toastr.success("Users Created!")
    }    
  }
})