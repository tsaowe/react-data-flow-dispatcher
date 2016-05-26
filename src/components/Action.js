/**
 * Created by tsaowe on 16/5/26.
 */

import ActionType from './ActionType';
import warning from './error';

class Action {


    actions = [];

    constructor(...list) {
        if (!Action.prototype._actions) {
            this.actions = Action.prototype._actions;
        } else {
            Action.prototype._actions = [];
        }

        if (list.length !== 2) {
            warning('arguments length should be 2 ,but given ' + list.length);
        } else {
            let actionNames = list[0];
            //let action
        }


    }


}