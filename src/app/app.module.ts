import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StaticpageModule } from './staticpage/staticpage.module';
import { PackagesModule } from './packages/packages.module';
import { AccountserviceService } from './account/accountservice.service';
import { AccountModule } from './account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    PackagesModule,
    StaticpageModule,
    ReactiveFormsModule,
    AccountModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AccountserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
