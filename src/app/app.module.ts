import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { FooterComponent } from './footer/footer.component';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderPlacementComponent,
    ModalComponent,
    HomeComponent,
    ProductsComponent,
    CarouselComponent,
    BannerComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
