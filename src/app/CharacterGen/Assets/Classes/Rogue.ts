import { Character } from '../../Objects/character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = ["Leather armor"];
//weapons
let weapons: string[] = ["Two daggers"];
//packs
let packs: string[] = [];
//others
let others: string[] = ["Thieves' tools"];
//SavingThrows
let savingThrowProfs: string[] = ["Dexterity","Intelligence"];

//Weapon Profs
let weaponProfs: string[] = ["simple weapons","hand crossbows","longswords","rapiers","shortswords"];

//ArmorProfs
let armorProfs: string[] = ["light armor"];

//ToolProfs
let toolProfs: string[] = ["Thieves' tools"];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = null;


export class Rogue extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Rogue','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/384/420/618/636272820319276620.png',8,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, '', spellTable);
    }
}