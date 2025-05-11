import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderExampleComponent } from './loader-example/loader-example.component';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderExampleComponent,
    CustomLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
