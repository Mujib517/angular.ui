import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { TimePipe } from "./shared/time.pipe";
import { UsersComponent } from "./users/users.component";
import { ProductComponent } from './product/product.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, HomeComponent, 
        AboutComponent, ProductListComponent, TimePipe,UsersComponent, ProductComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}