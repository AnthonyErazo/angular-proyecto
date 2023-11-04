import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm:FormGroup;
  mostrarPassword:boolean=false;
  isLoading: boolean = false;
  loginInvalid:boolean=false;
  constructor(private fg:FormBuilder,
    private authService:AuthService,
    private router:Router){
    this.loginForm=this.fg.group({
      user:['',Validators.required],
      password:['',Validators.required]
    });
  }
  togglePasswordVisibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }
  @Output() systemLogin = new EventEmitter<boolean>();
  login() {
    const { user, password } = this.loginForm.value;
    this.isLoading = true;
    this.authService.login(user, password).subscribe((authenticated) => {
      
      if (authenticated) {
        this.systemLogin.emit(true);
        this.router.navigate(['/home']);
      } else {
        this.loginInvalid = true;
        this.loginForm.reset();
      }
      this.isLoading = false;
    });
  }
}
