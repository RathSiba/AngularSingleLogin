import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RescomCaseidComponent } from './rescom-caseid/rescom-caseid.component';
import { RescomCdaxInformationComponent } from './rescom-cdax-information/rescom-cdax-information.component';
import { HeaderComponent } from './custom-layout/header/header.component';
import { FooterComponent } from './custom-layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RescomCaseidComponent,
    RescomCdaxInformationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
