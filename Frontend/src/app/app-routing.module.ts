import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './complements/login/login.component';
import { UserManagerComponent } from './complements/user-manager/user-manager.component';


const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'user', component: UserManagerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
