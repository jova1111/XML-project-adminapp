import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ AuthService ]
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean;
  public show: boolean;
  private user: User = new User();
  private error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.show = false;
  }

  onClick(){
    this.isLogged = false;
    localStorage.removeItem('token');
    this.router.navigate(["/home"]);
  }

  loginForm(){
    this.show = true;
  }

  loginAdmin(){
    console.log("ajdeeeee")
    this.authService.login(this.user).then(
      (succesMsg) => {
        alert(succesMsg);
        this.isLogged = this.authService.isAuthenticated();
        this.show = false;
        this.user.email = "";
        this.user.password = "";
    }).catch(
      (errorMsg) => {
        this.error = errorMsg;
      }
    );
  }
}
