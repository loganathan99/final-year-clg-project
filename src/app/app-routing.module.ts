import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ViewpageComponent } from './pages/admin/viewpage/viewpage.component';
import { ServiceComponent } from './pages/dashboard/service/service.component';
import { ViewComponent } from './pages/dashboard/view/view.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicepageComponent } from './pages/admin/servicepage/servicepage.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/viewpage/service/:id/:uid', component: ServicepageComponent },
  { path: 'viewpage', component: ViewpageComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'view/:id', component: ViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
