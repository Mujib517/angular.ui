import { NgModule } from "@angular/core";
import { Lazy2Component } from "./lazy2.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([])],
    declarations: [Lazy2Component],
    exports: []
})
export class LazyModule { }