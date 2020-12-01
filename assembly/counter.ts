import { Actor, query, update } from "./lib/actor";
import * as API from "./lib/api"


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
        API.print("Hello " + value);
        return value;
    }

    @query()
    boolTest(value: bool): bool {
        return value;
    }

    @query()
    stringArray(value: Array<string>): Array<string> {
        for(var i:i32 = 0;i<value.length;i++){
            API.print("Array value: " + value[i]);
        }
        return value;
    }

    @query()
    intArray(value: Array<i64>): Array<i64> {
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

    blah(value: string[]): void {

    }
}

export {
    CounterActor
}