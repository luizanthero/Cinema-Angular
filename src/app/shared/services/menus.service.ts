import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  private menus: any = [
    { text: 'Exhibitions', path: 'exhibitions' },
    { text: 'Films', path: 'films' },
    { text: 'Rooms', path: 'rooms' },
    { text: 'Room Types', path: 'roomtypes' },
    { text: 'Schedules', path: 'schedules' },
    { text: 'Screens', path: 'screens' },
    { text: 'Users', path: 'users' },
  ];

  constructor() {}

  getAll(): Observable<any> {
    return this.menus;
  }
}
