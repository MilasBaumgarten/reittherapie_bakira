import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PasswordServiceService } from './services/password-service.service';

export const passwordGuard: CanActivateFn = (route, state) => {
  const passwordService = inject(PasswordServiceService);
  const router = inject(Router);

  if (passwordService.isAuthenticated()) {
    return true;
  }

  const enteredPassword = prompt('Bitte geben Sie das Passwort ein um diese Seite zu sehen:');
  if (enteredPassword && passwordService.verifyPassword(enteredPassword)) {
    return true;
  } else {
    // navigate to the login page if the password is not correct
    router.navigate(['./login']);
    return false;
  }
};
