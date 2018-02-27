import { NgModule } from "@angular/core";
import { ProductService } from "./product.service";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { TimePipe } from "./time.pipe";

@NgModule({
    declarations: [TimePipe], //view related. comoponents, pipes, directives
    providers: [ProductService, { provide: ConsoleLogger, useClass: FileLogger }],
    exports: [TimePipe]
})
export class SharedModule { }