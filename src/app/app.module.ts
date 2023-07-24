import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'login', component: LoginComponent }, // Define the LoginComponent as the login page
  { path: 'dashboard', component: DashboardComponent }, // Define the DashboardComponent as the dashboard page
  // Additional routes can be added as needed
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
