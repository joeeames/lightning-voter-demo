angular.module('app').component('login', {
  templateUrl: '/security/login.html',
  bindings: {
    
  },
  controller: class LoginCtrl {
    $state: any;
    auth: any;
    toastr: any;
    email: string;
  
    constructor($state, currentIdentity, auth, toastr) {
      this.$state = $state;
      this.auth = auth;
      this.toastr = toastr;
        
      if(currentIdentity.authenticated()) {
        $state.go('home');
      }
    }
      
    login() {
        this.auth.login({
          username: this.email,
          password: "pass"
        }).then(() => {
          this.$state.go('home');
        }, (err) => {
          this.toastr.error(err);
        })
      }
    }
})