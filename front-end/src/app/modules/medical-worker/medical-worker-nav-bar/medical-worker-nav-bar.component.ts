import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-medical-worker-nav-bar',
  templateUrl: './medical-worker-nav-bar.component.html',
  styleUrls: ['./medical-worker-nav-bar.component.css']
})
export class MedicalWorkerNavBarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
