import { Component, OnInit } from '@angular/core';
import { Agent } from '../../model/Agent';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css'],
  providers: [ AuthService ]
})
export class RegisterAgentComponent implements OnInit {

  private agent: Agent = new Agent();

  constructor(private authService: AuthService,  private router: Router) { }

  users : any;
  selected;
  
  ngOnInit() {
    this.authService.getAgents().subscribe(
      result => {
        this.users = result;
      }
    );
  }

  setSelected(user) {
    this.selected = user;
    console.log(user);
  }
 

  onSubmit() {
    console.log(this.agent);
    this.authService.registerAgent(this.agent).then(
      (response) => {this.users.push(response)
        alert("Uspesno ste dodali agenta")
      },
      (error) => console.log(error) 
    );
  }



}
