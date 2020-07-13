import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  SharedModule,
  NavbarReducer,
  AuthenticateReducer,
  MenuReducer,
} from './shared';
import { ModalDynamicComponent } from './shared/components';

const reducers = {
  navbar: NavbarReducer,
  isAuth: AuthenticateReducer,
  menus: MenuReducer,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
    MatDialogModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDynamicComponent],
})
export class AppModule {}
