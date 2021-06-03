import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RescomCaseidComponent } from './rescom-caseid/rescom-caseid.component';
import { RescomCdaxInformationComponent } from './rescom-cdax-information/rescom-cdax-information.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'caseid', component: RescomCaseidComponent },
  { path: 'cdax', component: RescomCdaxInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
