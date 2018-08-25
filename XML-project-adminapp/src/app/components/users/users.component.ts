import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
      (response) => {
        this.users.splice(this.users.indexOf(this.selected),1)    
        alert("Uspesno ste izbrisali korisnika")
      },
    (error) => console.log(error) 
    );
  }

  update(user) {
    
    this.selected = user;
    this.authService.changeActivity(this.selected).then(
    (response) => {this.users[this.selected] = response
      alert("Uloga korinika je promenjena")
      this.authService.getUsers().subscribe(
        result => {
          this.users = result;
        }
      );
    },
    (error) => console.log(error) 
    );

  }
}
