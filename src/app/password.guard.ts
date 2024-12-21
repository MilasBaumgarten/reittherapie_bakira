import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PasswordServiceService } from './services/password-service.service';

export const passwordGuard: CanActivateFn = (route, state) => {
  const passwordService = inject(PasswordServiceService);
  const router = inject(Router);

  const enteredPassword = prompt('Please enter the password');
  if (enteredPassword && passwordService.verifyPassword(enteredPassword)) {
    return true;
  } else {
    // navigate to the login page if the password is not correct
    router.navigate(['./login']);
    return false;
  }
};
