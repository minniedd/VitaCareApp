import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import emailjs from '@emailjs/browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit {

  center: google.maps.LatLngLiteral = { lat: 43.86950527122164, lng: 18.415253138623047 };
  zoom = 12;
  markers = [
    { lat: 43.86950527122164, lng: 18.415253138623047 } //43.86950527122164, 18.415253138623047
  ];
  mapOptions: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 18,
    minZoom: 5,
  };

  form: FormGroup = this.fb.group({
    from_name:'',
    to_name:'Admin',
    from_email:'',
    subject:'',
    message:''
  });

  constructor(private fb: FormBuilder,private location: Location) {}

  ngOnInit(): void {
  }

  async send() {
    emailjs.init('eiyZr7AbrDwZvHU1N');
    let response = await emailjs.send("service_f38xqj4","template_lkw1asq",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });
    alert("Message has been sent!");
    this.form.reset();
  }

  goBack(): void {
    this.location.back();
  }
}
