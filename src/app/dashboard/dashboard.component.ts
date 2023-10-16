import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  verificationLogin:boolean=false;
  handleLogin(loginSuccessful: boolean): void {
    this.verificationLogin=loginSuccessful;
  }
}
