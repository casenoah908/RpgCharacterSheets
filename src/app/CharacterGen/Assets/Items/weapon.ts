export interface Weapon{
    name: string;
    classification: string; //martial, simple, etc.
    price: string;
    damageType: string;
    damageDie: Array<number>;
    weight: number;
    bonusType: Array<string>; //strength, or also dexterity if finesse
    properties: Array<string>;
}