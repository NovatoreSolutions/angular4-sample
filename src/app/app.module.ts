import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { HerosComponent } from './heros/heros.component';
import { UserService } from './user.service';
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { AddHeroComponent } from './add-hero/add-hero.component';
// import { HttpModule }    from '@angular/http';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';




@NgModule({
  declarations: [
    // HttpModule,
    AppComponent,
    ListDetailComponent,
    HerosComponent,
    DashboardComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
 providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
