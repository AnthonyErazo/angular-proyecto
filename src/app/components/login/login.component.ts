import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import usersdata from 'src/app/data/usersdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formLogin:FormGroup;
  loginInvalid:boolean=false;
  constructor(
    private formBuilder:FormBuilder
    ){
      this.formLogin=this.formBuilder.group({
        usuario:['',Validators.required],
        password:['',Validators.required]
      });
      console.log(this.formLogin.controls['usuario'].invalid)
    }
  @Output()
  systemLogin = new EventEmitter<boolean>();
  login(){
    const usuarioEncontrado = usersdata.find((user) => user.usuario === this.formLogin.value.usuario && user.password === this.formLogin.value.password);
    this.systemLogin.emit(!!usuarioEncontrado);
    if(!!usuarioEncontrado==false){
      this.loginInvalid=true;
    }
  }
  loginControl(info:string):AbstractControl{
    return this.formLogin.controls[info];
  }
  loginControlInvalid(info:string):boolean{
    return this.loginControl(info).invalid&&this.loginControl(info).touched;
  }

}
