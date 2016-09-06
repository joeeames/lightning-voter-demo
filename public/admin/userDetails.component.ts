import { Component, Input, Inject } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: "/admin/userDetails.component.html"
})
export class UserDetailsComponent {
  @Input() allUsers;
  user: any;

  constructor(@Inject('$routeParams') private $routeParams) {}

  ngOnInit() {
     this.user = this.allUsers.find((user) => {
      return user.id === parseInt(this.$routeParams.id);
    })
  }
}
