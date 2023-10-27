import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigApi } from '../services/config-api';
import { WebService } from '../services/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit{
  
 loginForm:FormGroup;

  constructor(private fb: FormBuilder,private services:WebService,private route:Router) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
  
    let url = ConfigApi.URLS.LOGIN;
    let method = "POST";
    this.services.callAPI(body, method, url).subscribe((res:any) => {
      console.log(res);
      
      if (res) { 
        this.route.navigate(['/dashboard']);
      } else {
        alert(res);
      }
    });
  }
}
