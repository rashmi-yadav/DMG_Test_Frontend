import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CommonModule } from '@angular/common';
import { LargeCardComponent } from './large-card/large-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    BestsellerComponent,
    ProductViewComponent,
    LargeCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
