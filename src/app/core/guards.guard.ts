import { Router } from '@angular/router';
import { Injectable } from '@angular/core';// Asume que tienes un servicio de autenticación
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      // Si el usuario está autenticado, permite el acceso
      return true;
    } else {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
