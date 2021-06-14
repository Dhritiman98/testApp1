import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
    {
        path:'login' , component: LoginComponent 
    },
    {
        path:'details' , component: DetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
