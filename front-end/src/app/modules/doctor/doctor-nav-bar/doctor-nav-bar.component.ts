import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-doctor-nav-bar',
  templateUrl: './doctor-nav-bar.component.html',
  styleUrls: ['./doctor-nav-bar.component.css']
})
export class DoctorNavBarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
