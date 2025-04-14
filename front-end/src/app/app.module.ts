import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MedicalWorkerNavBarComponent } from './modules/medical-worker/medical-worker-nav-bar/medical-worker-nav-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { FileEndpoint } from './modules/doctor/doctor-scheduled-appointments/endpoints/file.endpoint';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthInterceptor} from "./modules/auth/interceptors/auth.interceptor";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        NgbModule
    ],
    providers: [FileEndpoint, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
