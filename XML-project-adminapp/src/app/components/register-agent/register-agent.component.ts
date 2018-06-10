import { Component, OnInit } from '@angular/core';
import { Agent } from '../../model/Agent';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css'],
  providers: [ AuthService ]
})
export class RegisterAgentComponent implements OnInit {

  private agent: Agent = new Agent();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
 

  onSubmit() {
    console.log(this.agent);
    this.authService.registerAgent(this.agent).then(
      (response) => console.log(response),
      (error) => console.log(error) 
    );
  }



}
