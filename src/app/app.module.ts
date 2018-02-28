import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { UsersComponent } from "./users/users.component";
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRouterModule } from "./shared/app.router.module";
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, SharedModule,AppRouterModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ProductListComponent, UsersComponent, ProductComponent, HeaderComponent, FooterComponent, ContactComponent, ProductDetailComponent, NewProductComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}