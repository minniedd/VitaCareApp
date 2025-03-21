import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  {
    path:'doctor',
    loadChildren:()=>import('./modules/doctor/doctor.module').then(m=>m.DoctorModule)
  },
  {
    path:'medical-worker',
    loadChildren:()=>import('./modules/medical-worker/medical-worker.module').then(m=>m.MedicalWorkerModule)
  },
  {
    path: 'admin',
    loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren:() =>import('./modules/auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path: 'public',
    loadChildren:()=>import('./modules/public/public.module').then(m=>m.PublicModule),
  },
  {
    path: '**', redirectTo:'public', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
