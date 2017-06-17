angular.module('app').component('userDetails', { 
  templateUrl: '/admin/userDetails.html',
  bindings: {
    allUsers: '='
  },
  controller: class UserDetails {
    private user;
    private allUsers;

    constructor(private $routeParams) {
    }

    $onInit() {
      console.log('here', this.allUsers)
      this.user = this.allUsers.find((user) => {
        return user.id === parseInt(this.$routeParams.id);
      })
    }
  }
})