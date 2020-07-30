export interface Weapon{
    name: string;
    classification: string; //martial, simple, etc.
    price: string;
    damageType: string;
    damageDie: number;
    bonusType: Array<string>; //strength, or also dexterity if finesse
    properties: Array<string>;
}