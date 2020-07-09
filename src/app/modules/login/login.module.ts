import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from 'src/app/shared';

import { LoginService } from './service';
import { AuthenticationComponent, RegisterComponent } from './components';

@NgModule({
  declarations: [AuthenticationComponent, RegisterComponent],
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
