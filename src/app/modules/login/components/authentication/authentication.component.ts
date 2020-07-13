import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Store } from '@ngrx/store';

import { Authenticate, Hide, Show, Login } from 'src/app/shared';

import { LoginService } from '../../service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('formLogin', { static: true }) formLogin: NgForm;

  user: Authenticate;

  navbar$: Observable<any>;
  isAuth$: Observable<any>;

  constructor(
    private service: LoginService,
    private router: Router,
    private alert: AlertService,
    private store: Store<{ navbar: boolean; isAuth: boolean }>
  ) {
    this.navbar$ = this.store.select('navbar');
    this.isAuth$ = this.store.select('isAuth');
  }

  ngOnInit(): void {
    this.store.dispatch(Hide());
    this.navbar$.subscribe((response) => {
      console.log(response);
    });
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

          this.store.dispatch(Show());
          this.store.dispatch(Login());

          this.router.navigate(['/']);
        },
        (error) => this.alert.danger(`Error: ${error.message}`)
      );
    }
  }
}
