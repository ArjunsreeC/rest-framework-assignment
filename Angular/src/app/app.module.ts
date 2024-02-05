import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { FilterPipe } from './pipes/filter.pipe';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data', component: DataComponent },
  { path: 'add', component: AddComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    SearchComponent,
    AddComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
