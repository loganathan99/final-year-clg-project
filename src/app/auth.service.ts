import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api$: ApiService) {}

  parseJWT(token: string): any {
    if (token !== null) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(window.atob(base64));
    }
    return null;
  }

  storeToken(token: string): void {
    localStorage.setItem('BUS_ACCESS_TOKEN', token);
  }

  getStoredToken(): any {
    return localStorage.getItem('BUS_ACCESS_TOKEN');
  }

  getStoredTokenPayload(): any {
    const token = this.getStoredToken();
    const payload = this.parseJWT(token);
    return payload;
  }

  getLoggedInUser(): Observable<any> {
    return this.api$.getUserById(this.getStoredTokenPayload().id);
  }

  getRole(): string {
    const payload = this.getStoredTokenPayload();
    return payload.role;
  }
}
