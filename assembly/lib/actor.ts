import { Principal } from "./principal";

class Actor {
    public owner: Principal;
    public time: i64;
    constructor(owner: Principal, time:i64){
        this.owner = owner;
        this.time = time;
        //TODO: set owner, tokens?, time?
    }
}

function update() : void {
    //lets the canister know this is a canister_update
}

function query() : void {
    //lets the canister know this is a canister_query
}

function record() : void {
    //lets the canister know this is a canister_query
}


export {
    Actor,
    query,
    update,
    record
}