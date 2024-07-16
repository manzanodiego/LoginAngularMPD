import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  clickFacebook(){
    location.href = "https://www.facebook.com";
  }

  clickGithub(){
    location.href = "https://github.com/manzanodiego"
  }
}
