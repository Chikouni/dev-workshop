import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefisComponent } from './components/defis/defis.component';
import { AccessComponent } from './components/access/access.component';
import { DetailDefiComponent } from './components/defis/detail-defi/detail-defi.component';
import { ActusComponent } from './components/actus/actus.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DetailDefiSuccessComponent } from './components/defis/detail-defi/detail-defi-success/detail-defi-success.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'defis', component: DefisComponent},
  { path: 'defis/:id', component: DetailDefiComponent },
  { path: 'defis/:id/success', component: DetailDefiSuccessComponent },
  { path: 'access', component: AccessComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: ActusComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
