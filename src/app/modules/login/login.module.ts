import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from './components';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from 'src/app/shared';

import { LoginService } from './service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    LoginRoutingModule,
  ],
  providers: [LoginService],
})
export class LoginModule {}
