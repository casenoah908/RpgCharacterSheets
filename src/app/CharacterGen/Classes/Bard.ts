import { Character } from '../character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = ["Leather armor"];
//weapons
let weapons: string[] = ["dagger"];
//packs
let packs: string[] = [];
//others
let others: string[] = [];
//SavingThrows
let savingThrowProfs: string[] = ["Dexterity","Charisma"];

//Weapon Profs
let weaponProfs: string[] = ["simple weapons","hand crossbows","longswords","rapiers","shortswords"];

//ArmorProfs
let armorProfs: string[] = ["light armor"];

//ToolProfs
let toolProfs: string[] = ["Three musical instruments of your choice"];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = [
    [2,4,2,0,0,0,0,0,0,0,0], //level 1
    [2,5,3,0,0,0,0,0,0,0,0], //level 2
    [2,6,4,2,0,0,0,0,0,0,0], //level 3
    [3,7,4,3,0,0,0,0,0,0,0], //level 4
    [3,8,4,3,2,0,0,0,0,0,0], //level 5
    [3,9,4,3,3,0,0,0,0,0,0], //level 6
    [3,10,4,3,3,1,0,0,0,0,0], //level 7
    [3,11,4,3,3,2,0,0,0,0,0], //level 8
    [3,12,4,3,3,3,1,0,0,0,0], //level 9
    [4,14,4,3,3,3,2,0,0,0,0], //level 10
    [4,15,4,3,3,3,2,1,0,0,0], //level 11
    [4,15,4,3,3,3,2,1,0,0,0], //level 12
    [4,16,4,3,3,3,2,1,1,0,0], //level 13
    [4,18,4,3,3,3,2,1,1,0,0], //level 14
    [4,19,4,3,3,3,2,1,1,1,0], //level 15
    [4,19,4,3,3,3,2,1,1,1,0], //level 16
    [4,20,4,3,3,3,2,1,1,1,1], //level 17
    [4,22,4,3,3,3,3,1,1,1,1], //level 18
    [4,22,4,3,3,3,3,2,1,1,1], //level 19
    [4,22,4,3,3,3,3,2,2,1,1] //level 20
];


export class Bard extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Bard','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png', 8,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Charisma', spellTable);
    }
}