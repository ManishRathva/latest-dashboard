import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { ConfigApi } from '../services/config-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  listData: any;

  constructor(private services:WebService){}

  ngOnInit(): void {
    this.getList();     
  }

  getList(){
    let url = ConfigApi.URLS.GET;
     let method="GET";
    this.services.callAPI({},method,url).subscribe((res)=>{
      this.listData = res.data;
      console.log(this.listData);
      
    })
  }

}
