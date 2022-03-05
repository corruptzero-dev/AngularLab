import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { EmployeeModule } from './employee/employee.module';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';

const routes: Routes = [
  {
      path: '',
      component: EmployeeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
