/**
 * Created by tsaowe on 16/5/26.
 */

import utils from '../utils/common';
import warning from './error';



export default class ActionType {

    type = undefined;
    constructor(value){
        if(typeof value !== 'string'){
            warning('ActionType should be typeof String,but given ' + typeof value+
                ', this will be ignore by default value by react data flow framework');
            this.type = utils.random();
        } else {
            this.type = value;
        }
    }
    
}