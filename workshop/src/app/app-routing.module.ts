import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefisComponent } from './components/defis/defis.component';
import { AccessComponent } from './components/access/access.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'defis', component: DefisComponent },
  { path: 'access', component: AccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
