import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { GroupAccountComponent } from './components/group-account/group-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'accounts', component: AccountComponent, title: 'Accounts' },
  { path: 'group-accounts', component: GroupAccountComponent, title: 'Group of Accounts' },
  { path: 'home', component: DashboardComponent, title: 'Home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
