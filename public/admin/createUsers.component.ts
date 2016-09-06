import { Component, Input, Inject } from '@angular/core';
import { NameParser } from './nameParser.service';
import { Users } from '../security/users.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'create-users',
  templateUrl: "/admin/createUsers.component.html"
})
export class CreateUsersComponent {
  namesblob: string;

  constructor(private nameParser: NameParser,
      private users: Users, 
      @Inject('toastr') toastr) {
  }
      
  import() {
    var people = this.nameParser.parse(this.namesblob);
    people.forEach(person => {
      this.users.createNewUser({
        email: person.email,
        password: "pass",
        firstName: person.firstName,
        lastName: person.lastName
      }).catch(error => {
        toastr.error("User already exists: " + person.email)
        return Observable.throw("User already exists");
      }).subscribe();
    });
    
    toastr.success("Users Created!")
  }    
}