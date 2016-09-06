import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: "/admin/userList.component.html"
})
export class UserListComponent {
  @Input('allUsers') users;

  ngOnInit() {
    this.users.sort(function(user1, user2) {
      if(user1.firstName < user2.firstName) return -1;
      if(user1.firstName === user2.firstName) return 0;
      if(user1.firstName > user2.firstName) return 1;
    })
  }
}
