import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = this.normalizeRoles(route.data['expectedRoles']);
    const userRoles = this.authService.getUserRoles();

    if (expectedRoles.some(role => userRoles.includes(role))) {
      return true;
    }

    this.redirectBasedOnRole(userRoles);
    return false;
  }

  private normalizeRoles(roles: any): string[] {
    if (!roles) return [];
    if (Array.isArray(roles)) return roles;
    if (typeof roles === 'string') return [roles];
    return [];
  }

  private redirectBasedOnRole(userRoles: string[]): void {
    if (userRoles.includes('Admin')) {
      this.router.navigate(['/admin']);
    } else if (userRoles.includes('Doctor')) {
      this.router.navigate(['/doctor']);
    } else if (userRoles.includes('MedWorker')) {
      this.router.navigate(['/medical-worker']);
    } else {
      this.router.navigate(['/public']);
    }
  }
}
