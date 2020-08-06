import { Character } from '../../Objects/character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = [];
//weapons
let weapons: string[] = ["Longbow and 20 arrows"];
//packs
let packs: string[] = [];
//others
let others: string[] = [];
//SavingThrows
let savingThrowProfs: string[] = ["Strength","Dexterity"]; //Ranger

//Weapon Profs
let weaponProfs: string[] = ["simple weapons","martial weapons"]; //Ranger

//ArmorProfs
let armorProfs: string[] = ["light armor","medium armor","shields"]; //Ranger

//ToolProfs
let toolProfs: string[] = []; //Ranger

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = 
[[0,0,0,0,0,0,0], //level 1
[0,2,2,0,0,0,0], //level 2
[0,3,3,0,0,0,0], //level 3
[0,3,3,0,0,0,0], //level 4
[0,4,4,2,0,0,0], //level 5
[0,4,4,2,0,0,0], //level 6
[0,5,4,3,0,0,0], //level 7
[0,5,4,3,0,0,0], //level 8
[0,6,4,3,2,0,0], //level 9
[0,6,4,3,2,0,0], //level 10
[0,7,4,3,3,0,0], //level 11
[0,7,4,3,3,0,0], //level 12
[0,8,4,3,3,1,0], //level 13
[0,8,4,3,3,1,0], //level 14
[0,9,4,3,3,2,0], //level 15
[0,9,4,3,3,2,0], //level 16
[0,10,4,3,3,3,1], //level 17
[0,10,4,3,3,3,1], //level 18
[0,11,4,3,3,3,2], //level 19
[0,11,4,3,3,3,2]]; //level 20


export class Ranger extends Character{

    //ranger specific properties:
    
    

    //define character properties throguh constructor
    constructor(){
        super('Ranger','https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/367/420/618/636272702826438096.png',10,armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, 'Wisdom',spellTable);
    }
}