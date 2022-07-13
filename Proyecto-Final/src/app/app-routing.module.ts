import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'search', component: SearchComponent},
  {path:'information', component: InformationComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
