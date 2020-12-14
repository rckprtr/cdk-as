import { print } from "./api";
import { Principal } from "./principal";
import { Storage } from "./storage";

class Actor {
    public owner: Principal;
    public time: i64;
    public storage: Storage;

    constructor(owner: Principal, time:i64){
        this.owner = owner;
        this.time = time;
        this.storage = new Storage();
        //TODO: set owner, tokens?, time?
    }

    //overloads Actor preUpgrade
    preUpgrade() : void{
        print("[Counter] Canister pre upgrade called");
        this.storage.save();
    }

    postUpgrade() : void{
        print("[Counter] Canister post upgrade called");
        this.storage.reload();
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