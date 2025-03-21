import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ReportsComponent} from "./reports/reports.component";
import {ReviewManagementComponent} from "./review-management/review-management.component";
import {RoleManagementComponent} from "./role-management/role-management.component";
import {SettingsComponent} from "./settings/settings.component";
import {UserLogsComponent} from "./user-logs/user-logs.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {AdminErrorPageComponent} from "./admin-error-page/admin-error-page.component";
import {AppointmentManagementComponent} from "./appointment-management/appointment-management.component";

const routes: Routes = [
  {path:'', component:AdminLayoutComponent, children: [
      {path: '', redirectTo:'dashboard', pathMatch: 'full'},
      {path:'dashboard', component: DashboardComponent},
      {path:'notifications', component: NotificationsComponent},
      {path:'reports', component: ReportsComponent},
      {path:'appointment-management', component: AppointmentManagementComponent},
      {path:'review-management', component: ReviewManagementComponent},
      {path:'role-management', component: RoleManagementComponent},
      {path:'settings', component: SettingsComponent},
      {path:'user-logs', component: UserLogsComponent},
      {path:'user-management', component: UserManagementComponent},
      {path:'**', component: AdminErrorPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
