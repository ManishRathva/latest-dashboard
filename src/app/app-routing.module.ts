import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: "",redirectTo:'login',pathMatch:'full'
  },
  
  {
    path: "login",
    component:LoginpageComponent,
  },
  {
    path: "register",
    component:RegistrationComponent,
  },
  {
    path: "",
    component: SidebarComponent,
    children: [
      {
       path:"dashboard",component:DashboardComponent,
      },
      {
        path:"userlist",component:UserlistComponent,
       },
    ]
  },
  {
    path: "**",
    redirectTo: "/login",
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
