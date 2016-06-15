/**
 * Created by lnc on 6/11/2016.
 */

import {Component, ViewChild, Input, OnChanges, SimpleChange, EventEmitter, Output, OnInit} from '@angular/core'
import {NgFor, NgClass, NgIf} from "@angular/common";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common"
import {DataService} from './services/data'
import {Data} from "./interface/interface";
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    selector: 'display',
    directives: [CORE_DIRECTIVES, NgFor, NgClass, NgIf, CHART_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: './app/display.component.html',
    providers: [DataService]
})


export class DisplayComponent implements OnInit {
    public data;

    getData(){
        this.data = this.dataService.getData()[0]
    }


    constructor(private dataService:DataService){

    }

    ngOnInit(){
        this.getData()
    }

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartDatas:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label:'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label:'Series B'}
    ];

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}