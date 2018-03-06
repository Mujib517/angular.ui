import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from "./shared/app.router.module";
import { SharedModule } from "./shared/shared.module";

import {
    AppComponent, HomeComponent,
    AboutComponent, ProductListComponent, UsersComponent, ProductComponent, HeaderComponent, FooterComponent, ContactComponent, ProductDetailComponent, NewProductComponent, SpecsComponent, ReviewsComponent, LazyComponent, ReactFormComponent
}
    from './app.barrel';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, AppRouterModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ProductListComponent, UsersComponent, ProductComponent, HeaderComponent, FooterComponent, ContactComponent, ProductDetailComponent, NewProductComponent, SpecsComponent, ReviewsComponent, LazyComponent, ReactFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}