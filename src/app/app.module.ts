import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from "./shared/app.router.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatButtonModule, MatCheckboxModule,
    MatInputModule, MatSelectModule, MatToolbarModule, MatProgressSpinnerModule
} from '@angular/material';


import {
    AppComponent, HomeComponent,
    AboutComponent, ProductListComponent, UsersComponent, ProductComponent, HeaderComponent, FooterComponent, ContactComponent, ProductDetailComponent, NewProductComponent, SpecsComponent, ReviewsComponent, LazyComponent, ReactFormComponent
}
    from './app.barrel';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [BrowserModule, FormsModule, BrowserAnimationsModule,
        ReactiveFormsModule, SharedModule, AppRouterModule,
        MatButtonModule, MatCheckboxModule, MatInputModule,
        MatSelectModule, MatToolbarModule, MatProgressSpinnerModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ProductListComponent, UsersComponent, ProductComponent, HeaderComponent, FooterComponent, ContactComponent, ProductDetailComponent, NewProductComponent, SpecsComponent, ReviewsComponent, LazyComponent, ReactFormComponent, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}