import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddAppartmentComponent } from './Appartment/add-appartment/add-appartment.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';

const routes: Routes = [
  {path:'',redirectTo:'/residence',pathMatch:'full'},
  {path:'residence',component:ResidencesComponent},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:ResidenceDetailsComponent},
  {path:'addAppart',component:AddAppartmentComponent},
  { path: "addRes", component: AddResidenceComponent },
  //dima path notfound ekher haja fel liste
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
