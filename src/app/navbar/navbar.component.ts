import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private route:Router){}
  ngOnInit(): void {
    
  }

  logout(): void {
    this.route.navigate(['/login']);
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
