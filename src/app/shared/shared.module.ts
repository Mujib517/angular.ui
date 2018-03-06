import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { TimePipe } from "./time.pipe";
import { ProductResolver } from "./product.resolver";

@NgModule({
    imports: [HttpClientModule],
    declarations: [TimePipe], //view related. comoponents, pipes, directives
    providers: [ProductService, ProductResolver, { provide: ConsoleLogger, useClass: FileLogger }],
    exports: [TimePipe]
})
export class SharedModule { }