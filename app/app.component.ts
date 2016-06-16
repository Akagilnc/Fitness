/**
 * Created by deronlee on 5/23/16.
 */
import {Component, OnInit} from '@angular/core';
import {DisplayComponent} from "./display.component";

@Component({
    selector: 'my-app',
    directives: [DisplayComponent],
    template: '<h1>My Fitness</h1>' +
    '<display></display>',
})

export class AppComponent {



}

