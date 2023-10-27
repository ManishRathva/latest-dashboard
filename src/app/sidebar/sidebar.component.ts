import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  innerWidth:any;
  @ViewChild('toggleSidebarForMe') toggleSidebarForMe!: ElementRef;
  constructor(){}

  ngOnInit(): void {
    
  }
  sideBarOpen = true;
sideBarToggler() {
  this.sideBarOpen = !this.sideBarOpen;
}
hide(){
  if(this.innerWidth <= 900){
    this.sideBarOpen = false;
  }
  }

  @HostListener('window:resize', ['$event'])
onResize(event:any){
 this.innerWidth = event.target.innerWidth;
 if (innerWidth <= 900) {
   this.sideBarOpen = false;
 }else{
   this.sideBarOpen = true;
 }
}
}
