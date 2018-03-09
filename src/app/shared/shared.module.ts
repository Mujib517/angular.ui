import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { TimePipe } from "./time.pipe";
import { ProductResolver } from "./product.resolver";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductInterceptor } from "./product.interceptor";
import { UserService } from "./user.service";
import { ProductGaurd } from "./product.gaurd";
import { ShowDirective } from "./show.directive";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe, ShowDirective], //view related. comoponents, pipes, directives
    providers: [ProductService, ProductResolver, UserService, ProductGaurd,
        { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true },
        { provide: ConsoleLogger, useClass: FileLogger }],
    exports: [TimePipe, ShowDirective]
})
export class SharedModule { }