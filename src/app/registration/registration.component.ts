import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebService } from '../services/web.service';
import { Router } from '@angular/router';
import { ConfigApi } from '../services/config-api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  
  loginForm:FormGroup;
  constructor(private fb: FormBuilder,private services:WebService,private route:Router) {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    const body = {
      username: this.loginForm.value.username,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
  
    let url = ConfigApi.URLS.CREAT;
    let method = "POST";
    this.services.callAPI(body, method, url).subscribe((res) => {
      if (res) { 
        this.route.navigate(['/login']);
      } else {
        alert(res.message);
      }
    });
  }
}
