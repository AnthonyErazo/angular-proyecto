import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';// Asume que tienes un servicio de autenticación
import { AuthService } from '../../auth/auth.service';
import { map } from 'rxjs';
export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService
    .verifyToken()
    .pipe(
      map((isAuthenticated) =>
        isAuthenticated ? true : router.createUrlTree(['/auth/login'])
      )
    );
};
