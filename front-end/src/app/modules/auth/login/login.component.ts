import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login successful, decoded token:', jwtDecode(response.accessToken));

        const roles = this.authService.getUserRoles();

        if (roles.includes('Admin')) {
          this.router.navigate(['/admin']);
        } else if (roles.includes('Doctor')) {
          this.router.navigate(['/doctor']);
        } else if (roles.includes('MedWorker')) {
          this.router.navigate(['/medical-worker']);
        } else {
          this.router.navigate(['/public']);
        }
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Invalid username or password';
        this.loading = false;
      }
    });
  }
}
