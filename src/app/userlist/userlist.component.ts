import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigApi } from '../services/config-api';
import { WebService } from '../services/web.service';
import { HttpParams } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit{
  displayedColumns: string[] = ['fname' , 'lname' , 'fullname' , 'role', 'action'];
  addForm:FormGroup;
  modeltitle: any;
  submitForm: any = {};
  onSubmitted: boolean=false;
  file: any;
  selectedImage:any;
  listData:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private modalService: NgbModal,private fb:FormBuilder,private services:WebService){
    this.addForm = fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      fullname:['',Validators.required],
      role:['',Validators.required],
    })

    this.listData = new MatTableDataSource(this.listData);
    this.listData.paginator = this.paginator;
  this.listData.sort = this.sort;
  }


  ngOnInit(): void {
    this.getList();
  }

  // ngAfterViewInit() {
  //   this.listData.paginator = this.paginator;
  //   this.listData.sort = this.sort;
  // }

  get f():{[key:string]:AbstractControl}{
    return this.addForm.controls;
  }

  openModal(targetModal: TemplateRef<any>, data: any, title: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: "static",
    });
    this.modeltitle = title;
    this.submitForm = Object.assign({}, data);
    }

  closeBtnClick(){
    this.modalService.dismissAll();
  }

  submitData(val:any) {
    console.log(val.value);
    console.log(this.addForm.value);
    
    this.onSubmitted = true;
      if(this.addForm.invalid){
        return
      }
    const uploadData = new HttpParams()
    .set('fname',val.value.fname)
    .set('lname',val.value.lname)
    .set('fullname',val.value.fullname)
    .set('role',val.value.role)
    let url = ConfigApi.URLS.ADD;
    let method = "POST";
    if (this.modeltitle == "Edit Data") {
      url = ConfigApi.URLS.UPDATE + "/" + this.submitForm._id;
      method = "PUT";
    }
      this.services.callAPI(uploadData,method,url).subscribe((res)=>{
        this.listData = res;
        console.log(this.listData);
        this.onSubmitted = false;
        this.addForm.reset();
        this.closeBtnClick();
      })
      
  }

  findUserByName(name : HTMLInputElement){
this.applyFilter(name.value);
}

  applyFilter(filterValue:string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.listData.filter = filterValue;
  }

  getList(){
    let url = ConfigApi.URLS.GET;
     let method="GET";
    this.services.callAPI({},method,url).subscribe((res)=>{
      this.listData = res.data;
      console.log(res);
      this.listData = new MatTableDataSource<any>(this.listData);
        this.listData.paginator = this.paginator;
        this.listData.sort = this.sort;
      
    })
  }

  // editData(data:any){
  //   this.openModal(editModal, data, 'Edit Data')
  // }

  deleteData(id:any){
    let url = ConfigApi.URLS.DELETE;
    let method="DELETE";
    this.services.callAPI({} ,method,url+"/"+id).subscribe((res)=>{
      this.getList();
    })
  }



}
