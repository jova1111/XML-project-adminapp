import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DeleteUser } from '../../model/user';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  users : any;
  selected;
  
  ngOnInit() {
    this.authService.getUsers().subscribe(
      result => {
        this.users = result;
        console.log(this.users);
      }
    );
  }

  setSelected(user) {
    this.selected = user;
    console.log(user);
  }

  delete(user) {
    
    this.selected = user;
    console.log(user);
    this.authService.deleteUser(this.selected).then(
    (response) => console.log(response),
    (error) => console.log(error) 
    );
    this.router.navigateByUrl('/home');

  }

  update(user) {
    
    this.selected = user;
    console.log(user);

    this.authService.changeActivity(this.selected).then(
    (response) => console.log(response),
    (error) => console.log(error) 
    );
    this.router.navigateByUrl('/home');

  }
}
