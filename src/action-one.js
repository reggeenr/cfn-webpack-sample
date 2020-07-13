import { one } from './business-logic';

function myAction(args) {
    return one(args);
}

global.main = myAction;
