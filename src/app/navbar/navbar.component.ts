import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
    
  }

  logout(): void {
    console.log('Logged out');
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
