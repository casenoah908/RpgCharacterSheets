import { Character } from '../../Objects/character';


//CLASS SPECIFIC DATA!!!

//armors
let armors: string[] = [];
//weapons
let weapons: string[] = ["Four Javelins"];
//packs
let packs: string[] = ["Explorer's pack"];
//others
let others: string[] = [];
//SavingThrows
let savingThrowProfs: string[] = ["Strength","Constitution"];

//Weapon Profs
let weaponProfs: string[] = ["simple weapons","martial weapons"];

//ArmorProfs
let armorProfs: string[] = ["light armor","medium armor","shields"];

//ToolProfs
let toolProfs: string[] = [];

//SpellTable (First is cantrips known, second is spells known, remaining are spell slots from levels 1-9)
let spellTable: number[][] = null;


export class Barbarian extends Character{

    //define character properties throguh constructor
    constructor(){
        super('Barbarian',"https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png",12, armors,weapons,packs,others, savingThrowProfs, weaponProfs, armorProfs, toolProfs, '', spellTable);
    }
}