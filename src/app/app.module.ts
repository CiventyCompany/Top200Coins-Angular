import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';

import { CoinsDataService } from './services/coins-data/coins-data.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { ListOfCoinsComponent } from './list-of-coins/list-of-coins.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavouriteCoinsComponent } from './favourite-coins/favourite-coins.component';

@NgModule({
  declarations: [
    AppComponent,
		ListOfCoinsComponent,
		HomePageComponent,
		FavouriteCoinsComponent
  ],
  imports: [
		ChartsModule,
    BrowserModule,
		HttpModule,
		FormsModule,
		NgbModule,
		RoutingModule
  ],
  providers: [CoinsDataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
