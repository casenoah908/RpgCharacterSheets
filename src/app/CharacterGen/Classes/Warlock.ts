import { Character } from '../character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = ["Leather armor"];
//weapons
let weapons: string[] = ["Two daggers", "One simple weapon"];
//packs
let packs: string[] = [];
//others
let others: string[] = [];
//SavingThrows
let savingThrowProfs: string[] = ["Wisdom","Charisma"];

//Weapon Profs
let weaponProfs: string[] = ["Simple Weapons"];

//ArmorProfs
let armorProfs: string[] = ["light armor"];

//ToolProfs
let toolProfs: string[] = [];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = [
    [2,2,1,0,0,0,0], //level 1
    [2,3,2,0,0,0,0], //level 2
    [2,4,0,2,0,0,0], //level 3
    [3,5,0,2,0,0,0], //level 4
    [3,6,0,0,2,0,0], //level 5
    [3,7,0,0,2,0,0], //level 6
    [3,8,0,0,0,2,0], //level 7
    [3,9,0,0,0,2,0], //level 8
    [3,10,0,0,0,0,2], //level 9
    [4,10,0,0,0,0,2], //level 10
    [4,11,0,0,0,0,3], //level 11
    [4,11,0,0,0,0,3], //level 12
    [4,12,0,0,0,0,3], //level 13
    [4,12,0,0,0,0,3], //level 14
    [4,13,0,0,0,0,3], //level 15
    [4,13,0,0,0,0,3], //level 16
    [4,14,0,0,0,0,3], //level 17
    [4,14,0,0,0,0,3], //level 18
    [4,15,0,0,0,0,3], //level 19
    [4,15,0,0,0,0,3] //level 20
];


export class Warlock extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Warlock','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/375/420/618/636272708661726603.png',8,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Charisma', spellTable);
    }
}