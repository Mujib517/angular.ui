import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
       <table border="1">
            <tr>
                <td>Value</td>
                <td>Index</td>
                <td>Even</td>
                <td>Odd</td>
                <td>First</td>
                <td>Last</td>
            </tr>
            <tr [ngClass]="{fg:evn,fg2:odd }" *ngFor="let val of arr;let idx=index;let evn=even;let odd=odd;let fst=first;let lst=last">
                <td>{{val}}</td>
                <td>{{idx}}</td>
                <td>{{evn}}</td>
                <td>{{odd}}</td>
                <td>{{fst}}</td>
                <td>{{lst}}</td>
            </tr>
       </table>   

        <h1 [ngClass]="cls">Home Page</h1>
        <h1 [ngStyle]="style">heading</h1>

    `
})
export class HomeComponent {
    show: boolean = true;
    priority: string = "very low";
    arr: number[] = [1, 2, 3, 4, 5, 6];
    cls: any = {
        fg: true,
        bg: true
    };
    style: any = {
        color: 'yellow',
        'background-color': 'blue'
    }


    toggle(): void {
        if (this.show) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    }
}

//ngIf, ngFor, ngSwitch, ngModel, ngClass ngStyle