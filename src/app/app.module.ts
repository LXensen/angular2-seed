import { PocService } from './poc/poc.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PocComponent } from './poc/poc.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [{
  path: 'portfolio', component: PocComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    PocComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
