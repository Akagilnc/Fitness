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

}

var data:Array<Data> = [
    {
        type: 'Cardio',
        name: 'Jumping Jack Kicks'
    }
]

