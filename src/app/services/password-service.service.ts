import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {
  private hashedPassword = '7ef9fd584c19f3739c49b37ca4cd9406806faa2c0204215bc11fbfc30ff17ba8';

  verifyPassword(password: string): boolean {
    const hashedInputPassword = CryptoJS.SHA256(password).toString();
    const isValid = this.hashedPassword === hashedInputPassword;

    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
    }
    return isValid;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
  }
}
