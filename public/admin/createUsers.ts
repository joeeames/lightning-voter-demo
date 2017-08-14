angular.module('app').component('createUsers', { 
  templateUrl: './createUsers.html',
  bindings: {
  },
  controller: function(nameParser, users, toastr) {
      
    this.import = function() {
      var people = nameParser.parse(this.namesblob);
      people.forEach((function(person) {
      users.createNewUser({
          email: person.email,
          password: "pass",
          firstName: person.firstName,
          lastName: person.lastName
        }).catch(function(error) {
          toastr.error("User already exists: " + person.email)
        }.bind(this))
      }).bind(this));
      
      toastr.success("Users Created!")
    }    
  }
})