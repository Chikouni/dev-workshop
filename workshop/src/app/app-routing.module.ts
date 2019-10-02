import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefisComponent } from './components/defis/defis.component';
import { AccessComponent } from './components/access/access.component';
import { DetailDefiComponent } from './components/defis/detail-defi/detail-defi.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'defis', component: DefisComponent},
  { path: 'defis/:id', component: DetailDefiComponent },
  { path: 'access', component: AccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
