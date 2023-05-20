import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { GroupAccountComponent } from './components/group-account/group-account.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupAccountComponent,
    AccountComponent,
    DashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
