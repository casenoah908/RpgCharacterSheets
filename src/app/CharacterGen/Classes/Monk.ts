import { Character } from '../character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = [];
//weapons
let weapons: string[] = ["10 darts"];
//packs
let packs: string[] = [];
//others
let others: string[] = [];
//SavingThrows
let savingThrowProfs: string[] = ["Strength","Dexterity"];

//Weapon Profs
let weaponProfs: string[] = ["simple weapons","shortswords"];

//ArmorProfs
let armorProfs: string[] = [];

//ToolProfs
let toolProfs: string[] = ["choose one type of artisan's tools or one musical instrument"];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = null;


export class Monk extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Monk','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/489/420/618/636274646181411106.png',8,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, '', spellTable);
    }
}