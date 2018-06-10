import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  private user: User = new User();
  private error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.user).then(
      (succesMsg) => {
        alert(succesMsg);
        this.router.navigateByUrl('/home');
    }).catch(
      (errorMsg) => {
        this.error = errorMsg;
      }
    );
  }

}
