/**
 * Created by lnc on 6/11/2016.
 */

import {Component, ViewChild, Input, OnChanges, SimpleChange, EventEmitter, Output} from '@angular/core'
import {NgFor, NgClass} from "@angular/common";
import {DataService} from './services/data'

@Component({
    selector: 'display',
    directives: [NgFor, NgClass],
    templateUrl: './app/display.component.html'
})

export class DisplayComponent implements OnChanges {

    ngOnChanges(){

    }
}