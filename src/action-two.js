import { two } from './business-logic';

function myAction(args) {
    return two(args);
}

global.main = myAction;
