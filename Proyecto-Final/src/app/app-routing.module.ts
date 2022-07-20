import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'search/:value', component: SearchComponent},
  {path:'details/:id', component: InformationComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
