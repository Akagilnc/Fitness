import {Data} from "../interface/interface";
import {Injectable} from "@angular/core";
/**
 * Created by lnc on 6/11/2016.
 */

@Injectable()
export class DataService {
    private data: Array<Data>;

    constructor() {
        this.data = data;
    }

    getData():Array<Data> {
        return this.data;
    }

    getCorrectData():Data {
        return this.data[0];
    }
}

var data:Array<Data> = [
    {
        type: '背部训练',
        name: '高位下拉',
        date: '2016-5-1',
        maxWeight: 80,
        groups: 1
    },
    {
        type: '背部训练',
        name: '高位下拉',
        date: '2016-5-1',
        maxWeight: 90,
        groups: 2
    },
    {
        type: '背部训练',
        name: '高位下拉',
        date: '2016-5-1',
        maxWeight: 100,
        groups: 3
    }
]

