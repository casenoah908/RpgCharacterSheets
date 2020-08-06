import { Character } from '../../Objects/character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = [];
//weapons
let weapons: string[] = [];
//packs
let packs: string[] = [];
//others
let others: string[] = ["Spellbook"];
//SavingThrows
let savingThrowProfs: string[] = ["Intelligence","Wisdom"];

//Weapon Profs
let weaponProfs: string[] = ["daggers","darts","slings","quarterstaffs","light crossbows"];

//ArmorProfs
let armorProfs: string[] = [];

//ToolProfs
let toolProfs: string[] = [];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = [
    [3,0,2,0,0,0,0,0,0,0,0], //level 1
    [3,0,3,0,0,0,0,0,0,0,0], //level 2
    [3,0,4,2,0,0,0,0,0,0,0], //level 3
    [4,0,4,3,0,0,0,0,0,0,0], //level 4
    [4,0,4,3,2,0,0,0,0,0,0], //level 5
    [4,0,4,3,3,0,0,0,0,0,0], //level 6
    [4,0,4,3,3,1,0,0,0,0,0], //level 7
    [4,0,4,3,3,2,0,0,0,0,0], //level 8
    [4,0,4,3,3,3,1,0,0,0,0], //level 9
    [5,0,4,3,3,3,2,0,0,0,0], //level 10
    [5,0,4,3,3,3,2,1,0,0,0], //level 11
    [5,0,4,3,3,3,2,1,0,0,0], //level 12
    [5,0,4,3,3,3,2,1,1,0,0], //level 13
    [5,0,4,3,3,3,2,1,1,0,0], //level 14
    [5,0,4,3,3,3,2,1,1,1,0], //level 15
    [5,0,4,3,3,3,2,1,1,1,0], //level 16
    [5,0,4,3,3,3,2,1,1,1,1], //level 17
    [5,0,4,3,3,3,3,1,1,1,1], //level 18
    [5,0,4,3,3,3,3,2,1,1,1], //level 19
    [5,0,4,3,3,3,3,2,2,1,1] //level 20
];


export class Wizard extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Wizard','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/357/420/618/636272696881281556.png',6,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Intelligence', spellTable);
    }
}