import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HeaderComponent } from './header/app.headerComponent';

// import { SearchButtonComponent } from './searchButton/SearchButtonComponent';



@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SearchButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
