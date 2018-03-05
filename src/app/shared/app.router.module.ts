import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { NewProductComponent } from "../new-product/new-product.component";
import { SpecsComponent } from "../specs/specs.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { ProductResolver } from "./product.resolver";
import { LazyComponent } from "../lazy/lazy.component";

const CHILDREN: Route[] = [
    { path: 'specs', component: SpecsComponent },
    { path: 'reviews', component: ReviewsComponent }];


const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'products', component: ProductListComponent, resolve: { response: ProductResolver } },
{ path: 'products/new', component: NewProductComponent },
{ path: 'products/:id', component: ProductDetailComponent, children: CHILDREN },
{ path: 'lazy', component: LazyComponent, loadChildren: 'app/shared/lazy.module#LazyModule' },
{ path: '**', redirectTo: '' }];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule { }