import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

import { Authenticate } from 'src/app/shared';

import { LoginService } from '../../service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('formLogin', { static: true }) formLogin: NgForm;

  user: Authenticate;

  constructor(
    private service: LoginService,
    private router: Router,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.user = new Authenticate('', '');
  }

  login(): void {
    if (this.formLogin.form.valid) {
      this.service.authenticate(this.user).subscribe(
        (response) => {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('username', this.user.username);
          sessionStorage.setItem('roles', response.roles);

          this.alert.info(`Welcome ${this.user.username}`);

          this.router.navigate(['/']);
        },
        (error) => this.alert.danger(`Error: ${error.message}`)
      );
    }
  }
}
