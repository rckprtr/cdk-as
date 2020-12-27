import { record } from "./lib/actor";

//@ts-ignore
@record()
class Profile {
    name: string;
    email: string;

    constructor(){
        this.name = "";
        this.email = "";
    }
}


//@ts-ignore
@record()
class User {
    username: string;
    profile: Profile;
    constructor(){
        this.profile = new Profile();
        this.username = "";
    }
}

//@ts-ignore
@record()
class Foo {
    foo_str_1: string;
    foo_str_2: string;
    bar: Array<Bar>;
    constructor(){
        this.foo_str_1 = "";
        this.bar = new Array<Bar>();
        this.foo_str_2 = "";
    }
}

//@ts-ignore
@record()
class Bar {
    bar_str_1: string;
    bar_str_2: string;
    constructor(){
        this.bar_str_1 = "";
        this.bar_str_2 = "";
    }
}



export {
    User,
    Profile,
    Foo,
    Bar
}