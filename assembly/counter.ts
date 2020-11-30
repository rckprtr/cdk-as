import { Actor, query, update } from "./lib/actor";
import * as API from "./lib/api"


class CounterActor extends Actor {

  public counter:i32 = 0;

  @update()
  set(value: i32): void{
    this.counter = value;
  }

  @update()
  increment(): void{
    this.counter+=1;
  }

  @update()
  decriment(): void {
    this.counter-=1;
  }

  @query()
  get_value(): void {
    API.print("Counter Count: " + this.counter.toString());
  }

  @update()
  echo(value: string): string{
    API.print("Hello " + value);
    return value;
  }

}

export {
    CounterActor
}