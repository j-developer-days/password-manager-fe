import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { GroupAccountComponent } from './components/group-account/group-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, title: 'Home' },
  { path: 'accounts', component: AccountComponent, title: 'Accounts' },
  { path: 'group-accounts', component: GroupAccountComponent, title: 'Group of Accounts' },
  { path: '**', component: ErrorComponent, title: 'Not found page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
