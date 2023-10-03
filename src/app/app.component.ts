import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApplicationAngular';
  verificationLogin:boolean=false;
  handleLogin(loginSuccessful: boolean): void {
    this.verificationLogin=loginSuccessful;
  }
}
