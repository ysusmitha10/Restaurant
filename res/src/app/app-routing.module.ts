import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeserveComponent } from './weserve/weserve.component';
import { BooktableComponent } from './booktable/booktable.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';
import { CanceltableComponent } from './canceltable/canceltable.component';



const routes: Routes =[
  { path:"",redirectTo:"dashboard-component",pathMatch:"full" },
  { path:'login-component',component:LoginComponent },
  { path:'dashboard-component',component:DashboardComponent },
  { path:'weserve-component',component:WeserveComponent},
  { path:'booktable-component',component:BooktableComponent},
  { path:'aboutus-component',component:AboutusComponent},
  { path:'registration-component',component:RegistrationComponent},
  { path:'canceltable-component',component:CanceltableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,DashboardComponent,WeserveComponent,BooktableComponent,AboutusComponent,RegistrationComponent,CanceltableComponent]

