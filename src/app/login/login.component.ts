import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  password: string = '';

  constructor(private router: Router) { }

  login(event) {
    event.preventDefault()
    localStorage.setItem('salvator-pass', JSON.stringify(this.password))
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 0)
    return false;
  }
}
