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
    public datas: Array<Data>;
    public data:Data;

    getData(){
        this.data = this.dataService.getData()[0]
    }


    constructor(private dataService:DataService){

    }

    ngOnInit(){
        this.getData()
    }

    // lineChart
    public lineChartData:Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType:string = 'line';
    public pieChartType:string = 'pie';

    // Pie
    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];

    public randomizeType():void {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    }

    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}