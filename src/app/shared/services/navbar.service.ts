import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private links = new Array<{ text: string; path: string }>();
  private isLoggedIn = new Subject<boolean>();

  constructor() {
    this.addItem({ text: 'Login', path: 'login' });
    this.isLoggedIn.next(false);
  }

  get getLinks(): Array<any> {
    return this.links;
  }

  get getLoginStatus(): Subject<boolean> {
    return this.isLoggedIn;
  }

  updateLoginStatus(status: boolean): void {
    this.isLoggedIn.next(status);

    if (!status) {
      this.clearAllItems();
      this.addItem({ text: 'Login', path: 'login' });
    }
  }

  updateNavAfterAuth(role: string): void {
    this.removeItem({ text: 'Login' });

    if (role === 'user') {
      this.addItem({ text: 'User Board', path: 'user' });
    } else if (role === 'Admin') {
      this.addItem({ text: 'Admin Board', path: 'admin' });
    }
  }

  addItem({ text, path }): void {
    this.links.push({ text: text, path: path });
  }

  removeItem({ text }): void {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }

  clearAllItems(): void {
    this.links.length = 0;
  }
}
