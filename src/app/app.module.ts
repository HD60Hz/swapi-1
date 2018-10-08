import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlueColoredDirective } from './blue-colored.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueColoredDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
