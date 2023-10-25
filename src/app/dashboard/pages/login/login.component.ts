import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import usersdata from 'src/app/data/usersdata';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;
  mostrarPassword:boolean=false;
  isLoading: boolean = false;
  loginInvalid:boolean=false;
  constructor(private fg:FormBuilder,private authService: DataService){
    this.loginForm=this.fg.group({
      user:['',Validators.required],
      password:['',Validators.required]
    });
  }
  togglePasswordVisibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }
  @Output() systemLogin = new EventEmitter<boolean>();
  login(){
    const { user, password } = this.loginForm.value;
    this.isLoading = true;
    this.authService.authenticate(user, password).then((authenticated) => {
      this.isLoading = false;

      if (authenticated) {
        this.systemLogin.emit(true);
      } else {
        this.loginInvalid = true;
        this.loginForm.reset();
      }
    });
  }
}
