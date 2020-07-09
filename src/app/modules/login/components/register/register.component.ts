import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

import { Register } from 'src/app/shared';

import { LoginService } from '../../service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('formRegister', { static: true }) formRegister: NgForm;

  user: Register;

  constructor(
    private service: LoginService,
    private router: Router,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.user = new Register('', '', '');
  }

  register(): void {
    if (this.formRegister.form.valid) {
      this.service.register(this.user).subscribe(
        (response) => {
          this.alert.success(`Success: User: ${response.username}, created!`);
          this.router.navigate(['/login']);
        },
        (error) => this.alert.danger(`Error: ${error.message}`)
      );
    }
  }
}
