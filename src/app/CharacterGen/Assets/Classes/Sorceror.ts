import { Character } from '../../Objects/character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = [];
//weapons
let weapons: string[] = ["Two daggers"];
//packs
let packs: string[] = [];
//others
let others: string[] = [];
//SavingThrows
let savingThrowProfs: string[] = ["Constitution","Charisma"];

//Weapon Profs
let weaponProfs: string[] = ["daggers","darts","slings","quarterstaffs","light crossbows"];

//ArmorProfs
let armorProfs: string[] = [];

//ToolProfs
let toolProfs: string[] = [];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = [
    [4,2,2,0,0,0,0,0,0,0,0], //level 1
    [4,3,3,0,0,0,0,0,0,0,0], //level 2
    [4,4,4,2,0,0,0,0,0,0,0], //level 3
    [5,5,4,3,0,0,0,0,0,0,0], //level 4
    [5,6,4,3,2,0,0,0,0,0,0], //level 5
    [5,7,4,3,3,0,0,0,0,0,0], //level 6
    [5,8,4,3,3,1,0,0,0,0,0], //level 7
    [5,9,4,3,3,2,0,0,0,0,0], //level 8
    [5,10,4,3,3,3,1,0,0,0,0], //level 9
    [6,11,4,3,3,3,2,0,0,0,0], //level 10
    [6,12,4,3,3,3,2,1,0,0,0], //level 11
    [6,12,4,3,3,3,2,1,0,0,0], //level 12
    [6,13,4,3,3,3,2,1,1,0,0], //level 13
    [6,13,4,3,3,3,2,1,1,0,0], //level 14
    [6,14,4,3,3,3,2,1,1,1,0], //level 15
    [6,14,4,3,3,3,2,1,1,1,0], //level 16
    [6,15,4,3,3,3,2,1,1,1,1], //level 17
    [6,15,4,3,3,3,3,1,1,1,1], //level 18
    [6,15,4,3,3,3,3,2,1,1,1], //level 19
    [6,15,4,3,3,3,3,2,2,1,1] //level 20
];


export class Sorceror extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Sorceror','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/485/420/618/636274643818663058.png',6,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Charisma', spellTable);
    }
}