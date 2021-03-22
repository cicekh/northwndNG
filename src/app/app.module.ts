import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { TodoComponent } from './components/todo/todo.component';
import { PostComponent } from './components/post/post.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';



import {ToastrModule} from "ngx-toastr";

import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { ProductAddComponent } from './components/product-add/product-add.component';

//PrimeNG
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button'

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    ProductComponent,
    CategoryComponent,
    TodoComponent,
    PostComponent,
    FilterPipePipe,
    CartSummaryComponent,
    VatAddedPipe,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
