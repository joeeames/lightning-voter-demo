angular.module('app').component('userList', { 
  templateUrl: './userList.html',
  bindings: {
    users: '=allUsers'
  },
  controller: function() {
    this.$onInit = function() {      
      this.users.sort(function(user1, user2) {
        if(user1.firstName < user2.firstName) return -1;
        if(user1.firstName === user2.firstName) return 0;
        if(user1.firstName > user2.firstName) return 1;
      })
    }
    
  }
})