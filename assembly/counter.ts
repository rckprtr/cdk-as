import { Actor, query, update } from "./lib/actor";
import * as API from "./lib/api"
import { Decoder } from "./lib/call";
import { printUint8Array, Uint8ArrayFromU8Array } from "./lib/utils/helpers";
import { Profile } from "./models";
import * as HASH from "./lib/utils/hash";

class CounterActor extends Actor {

    public counter: i64 = 0;

    @update()
    set(value: i64): void {
        this.counter = value;
    }

    @update()
    increment(): void {
        this.counter += 1;
    }

    @update()
    decriment(): void {
        this.counter -= 1;
    }

    @query()
    get_value(): i64 {
        API.print("Counter Count: " + this.counter.toString());
        return this.counter;
    }

    @update()
    echo(value: string): string {
        return value;
    }

    @query()
    boolTest(value: bool): bool {
        
        return value;
    }

    @query()
    stringArray(value: Array<string>): Array<string> {
        for(var i:i32 = 0;i<value.length;i++){
            API.print("String Array value: " + value[i]);
        }
        return value;
    }

    @query()
    intArray(value: Array<i64>): Array<i64> {
        for(var i:i32 = 0;i<value.length;i++){
            API.print("Int Array value: " + value[i].toString());
        }
        return value;
    }

    @query()
    uintArray(value: Array<u64>): Array<u64> {
        for(var i:i32 = 0;i<value.length;i++){
            API.print("Array value: " + value[i].toString());
        }
        return value;
    }


    @query()
    stringList(value: string[]): string[] {
        for(var i:i32 = 0;i<value.length;i++){
            API.print("Array value: " + value[i]);
        }
        return value;
    }

    @query()
    inti32(value: i32): i32 {
        return value;
    }

    @query()
    inti64(value: i64): i64 {
        return value;
    }

    @query()
    intu32(value: u32): u32 {
        return value;
    }

    @query()
    intu64(value: u64): u64 {
        return value;
    }

    @query()
    inti8(value: i8): i8 {
        return value;
    }

    @query()
    intu8(value: u8): u8 {
        return value;
    }

    @query()
    inti16(value: i16): i16 {
        return value;
    }

    @query()
    intu16(value: u16): u16 {
        return value;
    }

    @query()
    f64(value: f64): f64 {
        return value;
    }

    @query()
    f32(value: f32): f32 {
        return value;
    }

    @update()
    trapTest(): void {
        API.trap("😵 Trap Test 😵");
    }

    @update()
    fundsAvailable(): u64 {
        var funds = API.fundsAvailable(this.owner);
        API.print("Available Funds: " + funds.toString());
        return funds;
    }

    @query()
    canisterId(): void {
        printUint8Array(API.canisterId().buffer);
    }

    @query()
    canisterBalance(): u64 {
        return API.canisterBalance(API.canisterId());
    }

    @query()
    getProfile(profile: Profile): Profile {
        API.print(profile.name + " " + profile.email + " " + profile.age.toString());
        return profile;
    }
}


export {
    CounterActor
}