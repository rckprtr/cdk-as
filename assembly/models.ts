import { record } from "./lib/actor";

//@ts-ignore
@record()
class Profile {
    name: string;
    email: string;
    age: i32;
}

export {
    Profile
}