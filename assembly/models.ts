import { record } from "./lib/actor";

@record()
class Profile {
    name: string;
    email: string;
    age: i32;
}

export {
    Profile,
}