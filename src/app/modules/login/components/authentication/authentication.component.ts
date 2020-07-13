import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Store } from '@ngrx/store';

import {
  Authenticate,
  Hide,
  Show,
  Login,
  IsAuth,
  MenusService,
} from 'src/app/shared';

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
  menus$: Observable<any>;

  constructor(
    private service: LoginService,
    private menus: MenusService,
    private router: Router,
    private alert: AlertService,
    private store: Store<{ navbar: boolean; isAuth: boolean; menus: any }>
  ) {
    this.navbar$ = this.store.select('navbar');
    this.isAuth$ = this.store.select('isAuth');
    this.menus$ = this.store.select('menus');
  }

  ngOnInit(): void {
    this.store.dispatch(Hide());
    this.user = new Authenticate('', '');
  }

  login(): void {
    if (this.formLogin.form.valid) {
      this.service.authenticate(this.user).subscribe(
        (response) => {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('username', this.user.username);
          sessionStorage.setItem('roles', response.roles);
          sessionStorage.setItem('isAuth', 'true');

          this.alert.info(`Welcome ${this.user.username}`);

          this.store.dispatch(Show());
          this.store.dispatch(Login());

          this.menus.getAll().subscribe(
            (response) => {
              this.store.dispatch(IsAuth({ payload: response }));

              this.router.navigate(['/']);
            },
            (error) => this.alert.danger(`Error: ${error.error}`)
          );
        },
        (error) => this.alert.danger(`Error: ${error.message}`)
      );
    }
  }
}
