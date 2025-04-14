import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {UserDto} from "../models/UserDto";
import {TokenResponseDto} from "../models/TokenResponseDto";
import {UserRegistrationDto} from "../models/UserRegistrationDto";
import {User} from "../models/User";
import {MyConfig} from "../../../My-Config";
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${MyConfig.server_address}/api/AuthEndpoint`;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: UserDto): Observable<TokenResponseDto> {
    return this.http.post<TokenResponseDto>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          console.log('Login response:', response); // Add this line
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('refresh_token', response.refreshToken);
        })
      );
  }

  getUserRole(): string | null {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.role ||
          decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ||
          null;
      } catch (error) {
        console.error('Error decoding token', error);
        return null;
      }
    }
    return null;
  }

  getUserRoles(): string[] {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const roles = decodedToken.role ||
          decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

        if (Array.isArray(roles)) {
          return roles;
        } else if (roles) {
          return [roles];
        }
      } catch (error) {
        console.error('Error decoding token', error);
      }
    }
    return [];
  }

  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }

  register(userData: UserRegistrationDto): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, userData);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
