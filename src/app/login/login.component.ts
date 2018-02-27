import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../datas/login/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toaster: ToastrService
  ) { }

  login(event) {
    event.preventDefault()

    this.loginService.login(this.password).subscribe(() => {
      this.router.navigateByUrl('/admin')
    }, err => {
      this.toaster.error('Failed...', 'Login failed')
    })

    return false;
  }
}
