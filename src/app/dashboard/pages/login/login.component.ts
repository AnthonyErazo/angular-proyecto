import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import usersdata from 'src/app/data/usersdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;
  mostrarPassword:boolean=false;
  loginInvalid:boolean=false;
  constructor(private fg:FormBuilder){
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
    const usuarioEncontrado = usersdata.find((user) => user.usuario === this.loginForm.value.user && user.password === this.loginForm.value.password);
    this.systemLogin.emit(!!usuarioEncontrado);
    if(!!usuarioEncontrado==false){
      this.loginInvalid=true;
      this.loginForm.reset();
    }
  }
}
