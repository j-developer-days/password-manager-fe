import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { GroupAccountComponent } from './components/group-account/group-account.component';
import { AppComponent } from './components/app.component';

const routes: Routes = [
  { path: 'accounts', component: AccountComponent },
  { path: 'group-accounts', component: GroupAccountComponent },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
