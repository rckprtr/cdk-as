import { record } from "./lib/actor";

//@ts-ignore
@record()
class Profile {
    name: string;
    email: string;
    age: i32;
    address: Address[];
}


//@ts-ignore
@record()
class Address {
    street: string;
    city: string;
    state: string;
}


//@ts-ignore
@record()
class User {
    username: string;
    created: u64;
    profile: Array<Profile>;
}



//@ts-ignore
@record()
class UserList {
    hugeList: Array<Profile[]>;
}


export {
    UserList,
    User,
    Profile,
    Address
}