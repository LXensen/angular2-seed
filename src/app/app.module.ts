import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing-module';
import { PocService } from './poc/poc.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PocComponent } from './poc/poc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [{
  path: 'portfolio', component: PocComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    PocComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PocService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
