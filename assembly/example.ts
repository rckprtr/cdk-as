import { Actor, query, update } from "./lib/actor";
import * as API from "./lib/api"
import { Bar, Foo, User } from "./models";
import { Principal } from "./lib/candid/types/principal";
import { newUUID } from "./lib/utils/uuid";
import { getType } from "./lib/candid/idl/types";

class ExampleActor extends Actor {

    //==============
    //Counter Examples
    //==============

    public counter: i64 = 0;

    //@ts-ignore
    @update()
    set(value: i64): void {
        this.counter = value;
    }

    //@ts-ignore
    @update()
    increment(): void {
        this.counter += 1;
    }

    //@ts-ignore
    @update()
    decriment(): void {
        this.counter -= 1;
    }

    //@ts-ignore
    @query()
    get_value(): i64 {
        API.print("Counter Count: " + this.counter.toString());
        return this.counter;
    }

    //==============
    //Echo Examples
    //==============

    //@ts-ignore
    @query()
    echo(value: string): string {
        return value;
    }

    //==============
    //Primitives Example
    //==============

    //@ts-ignore
    @query()
    boolTest(value: bool): bool {

        return value;
    }

    //@ts-ignore
    @query()
    stringArray(value: Array<string>): Array<string> {
        for (var i: i32 = 0; i < value.length; i++) {
            API.print("String Array value: " + value[i]);
        }
        return value;
    }

    //@ts-ignore
    @query()
    intArray(value: Array<i64>): Array<i64> {
        for (var i: i32 = 0; i < value.length; i++) {
            API.print("Int Array value: " + value[i].toString());
        }
        return value;
    }

    //@ts-ignore
    @query()
    uintArray(value: Array<u64>): Array<u64> {
        for (var i: i32 = 0; i < value.length; i++) {
            API.print("Array value: " + value[i].toString());
        }
        return value;
    }

    //@ts-ignore
    @query()
    stringList(value: string[]): string[] {
        for (var i: i32 = 0; i < value.length; i++) {
            API.print("Array value: " + value[i]);
        }
        return value;
    }

    //@ts-ignore
    @query()
    inti32(value: i32): i32 {
        return value;
    }

    //@ts-ignore
    @query()
    inti64(value: i64): i64 {
        return value;
    }

    //@ts-ignore
    @query()
    intu32(value: u32): u32 {
        return value;
    }

    //@ts-ignore
    @query()
    intu64(value: u64): u64 {
        return value;
    }

    //@ts-ignore
    @query()
    inti8(value: i8): i8 {
        return value;
    }

    //@ts-ignore
    @query()
    intu8(value: u8): u8 {
        return value;
    }

    //@ts-ignore
    @query()
    inti16(value: i16): i16 {
        return value;
    }

    //@ts-ignore
    @query()
    intu16(value: u16): u16 {
        return value;
    }

    //@ts-ignore
    @query()
    f64(value: f64): f64 {
        return value;
    }

    //@ts-ignore
    @query()
    f32(value: f32): f32 {
        return value;
    }

    //==============
    //API Examples
    //==============

    //@ts-ignore
    @update()
    trapTest(): void {
        API.trap("😵 Trap Test 😵");
    }

    //@ts-ignore
    @update()
    fundsAvailable(): u64 {
        var funds = API.fundsAvailable(this.owner);
        API.print("Available Funds: " + funds.toString());
        return funds;
    }

    //@ts-ignore
    @query()
    canisterBalance(): u64 {
        return API.canisterBalance(API.canisterId());
    }

    //==============
    //Record Examples
    //==============
    users: Array<User>;

    constructor(owner: Principal, time: i64) {
        super(owner, time)
        this.users = new Array<User>();
    }

    //@ts-ignore
    @query()
    getUser(username: string): User {
        var result: User | null = null;
        for (let x = 0; x < this.users.length; x++) {
            if(this.users[x].username == username){
                result = this.users[x];
            }
        }
        if(result == null){
            return new User();
        } else {
            return result;
        }
    }

    //@ts-ignore
    @update()
    updateUser(user: User): void {
        var result = this.getUser(user.username);
        if (result) {
        
        }
    }
    //@ts-ignore
    @query()
    listUsers(): Array<User> {
        return this.users;
    }

    //@ts-ignore
    @update()
    addUser(user: User): User {
        var result = this.getUser(user.username);
        if (result.username == "") {
            API.print("adding user: " + user.username)
            this.users.push(user);
            return user;
        }
        return user;
    }

    //@ts-ignore
    @update()
    removeUser(name: string): void {
        var result = this.getUser(name);
        if (result) {
            this.users.splice(this.users.indexOf(result), 1);
        }
    }

    //==============
    //Stable Examples
    //==============

    //@ts-ignore
    @update()
    testStable(val: i64): void {
        API.print("Non Stable value counter: " + this.counter.toString())
        //this.storage.printValues();
        //this.storage.add(val);
    }


    //==============
    //Util Examples
    //==============


    //@ts-ignore
    @update()
    testUUID(): Array<string> {
        var results = new Array<string>();
        for(var i:i32 = 0;i<10;i++){
            results.push(newUUID());
        }
        return results;
    }
}



export {
    ExampleActor
}