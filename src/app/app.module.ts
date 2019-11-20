import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
