import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherComponent } from './pages/other/other.component';
import { HomeComponent } from './pages/home/home.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [AppComponent, HomeComponent, OtherComponent],
  imports: [BrowserModule, AppRoutingModule, LazyElementsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
