import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppointmentManagementComponent } from './appointment-management/appointment-management.component';
import { ReviewManagementComponent } from './review-management/review-management.component';
import { UserLogsComponent } from './user-logs/user-logs.component';
import { AdminErrorPageComponent } from './admin-error-page/admin-error-page.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {RouterOutlet} from "@angular/router";
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserManagementComponent,
    RoleManagementComponent,
    SettingsComponent,
    ReportsComponent,
    NotificationsComponent,
    AppointmentManagementComponent,
    ReviewManagementComponent,
    UserLogsComponent,
    AdminErrorPageComponent,
    AdminLayoutComponent,
    AdminNavbarComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
    ]
})
export class AdminModule { }
