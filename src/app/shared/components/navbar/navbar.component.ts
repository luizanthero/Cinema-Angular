import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'cine-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbar$: Observable<any>;
  isAuth$: Observable<any>;

  constructor(
    private router: Router,
    private store: Store<{ navbar: boolean; isAuth: boolean }>
  ) {
    this.navbar$ = this.store.select('navbar');
    this.isAuth$ = this.store.select('isAuth');
  }

  ngOnInit(): void {}

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('roles');

    this.router.navigate(['']);
  }
}
