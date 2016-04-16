angular.module('app').controller('userListCtrl', 
      function(allUsers) {
    
  allUsers.sort(function(user1, user2) {
    if(user1.firstName < user2.firstName) return -1;
    if(user1.firstName === user2.firstName) return 0;
    if(user1.firstName > user2.firstName) return 1;
  })
  
  this.users = allUsers;
})