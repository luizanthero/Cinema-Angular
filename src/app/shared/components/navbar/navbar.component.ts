import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logout, NotAuth } from '../../reducers';

@Component({
  selector: 'cine-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbar$: Observable<any>;
  isAuth$: Observable<any>;
  menus$: Observable<any>;

  constructor(
    private router: Router,
    private store: Store<{ navbar: boolean; isAuth: boolean; menus: any }>
  ) {
    this.navbar$ = this.store.select('navbar');
    this.isAuth$ = this.store.select('isAuth');
    this.menus$ = this.store.select('menus');
  }

  ngOnInit(): void {
    this.menus$.subscribe((response) =>
      console.log('Menus - Navbar', response)
    );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('roles');

    this.router.navigate(['/exhibitions']);

    this.store.dispatch(Logout());
    this.store.dispatch(NotAuth());
  }
}
