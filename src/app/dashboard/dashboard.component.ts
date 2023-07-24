import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn: boolean = true; // Set this property to true when the user is logged in

  constructor(private router: Router) {}

  onLogout() {
    
    this.isLoggedIn = false;

    // Redirect the user to the login page after logging out
    this.router.navigate(['/login']);
  }
}
