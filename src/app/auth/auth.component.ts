import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';

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
    private authService:AuthService){
    this.loginForm=this.fg.group({
      user:['',Validators.required],
      password:['',Validators.required]
    });
  }
  togglePasswordVisibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }
  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.isLoading = true;
      this.authService.login(this.loginForm.getRawValue())
      .pipe(
        tap((authenticated) => {
          if (authenticated) {
          } else {
            this.loginInvalid = true;
            this.loginForm.reset();
          }
          this.isLoading = false;
        })
      ).subscribe();
    }
  }
}
