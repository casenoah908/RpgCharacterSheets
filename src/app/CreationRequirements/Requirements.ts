export class Requirements{
    // class is changed to role
    role: string;
    skills : Array<string>;
    armors : Array<string>;
    weapons : Array<string>;
    secondWeapons : Array<string>; //Maybe we could just tag this to weapons one and manually know where the stopping point is.
    packs : Array<string>;
    level1Desc : Array<string>;
    level1Choices : Array<Array<string>>;
}