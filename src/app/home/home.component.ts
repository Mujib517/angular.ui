import { Component, OnInit, OnChanges, OnDestroy, DoCheck, ViewEncapsulation } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger";
import { HttpClient } from "@angular/common/http";

//view encapsulation
//shadow dom
@Component({
    selector: 'app-home',
    encapsulation: ViewEncapsulation.Emulated,
    template: `
       <h1>Home Page</h1>
      
       <h1>{{count}}</h1>
       <button (click)="inc()">++</button>
    `,
    styles: [`h1 
    {
        color:red;
        background-color:yellow
    }
    `]
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy, DoCheck {


    count: number;

    constructor(private logger: ConsoleLogger, private http: HttpClient) {
        this.count = 0;
    }

    ngOnChanges() {
        console.log("Inside on changes");
    }

    ngOnInit() {
        this.logger.warn("Component took a lot of time to load");
        this.http.get("https://api.github.com/users")
            .subscribe(
            () => this.count = 1000,
            () => this.count = 100000
            );
    }

    ngDoCheck() {
        console.log("inside do check");
    }

    ngOnDestroy(): void {
        console.log("Destoryed");
    }

    inc() {
        this.count++;
    }
}

// asynchronous op   events,timers,web svc
//ngIf, ngFor, ngSwitch, ngModel, ngClass ngStyle

// constructor 1
// ngOnChanges @Input x
// ngOninit 1
// ngDoCheck() x
    // ngAfterContentInit 
    // ngAfterContentChecked
    // ngAfterViewInit
    // ngAfterViewChecked
// ngOnDestroy 1