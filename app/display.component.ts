/**
 * Created by lnc on 6/11/2016.
 */

import {Component, ViewChild, Input, OnChanges, SimpleChange, EventEmitter, Output, OnInit} from '@angular/core'
import {NgFor, NgClass, NgIf} from "@angular/common";
import {CORE_DIRECTIVES} from "@angular/common"
import {DataService} from './services/data'
import {Data} from "./interface/interface";

@Component({
    selector: 'display',
    directives: [CORE_DIRECTIVES, NgFor, NgClass, NgIf],
    templateUrl: './app/display.component.html',
    provider:[DataService]
})


export class DisplayComponent implements OnInit {
    public data;
    getData(){
        this.data = this.dataService.getData()
    }


    constructor(private dataService:DataService){

    }

    ngOnInit(){
        this.getData()
    }
}