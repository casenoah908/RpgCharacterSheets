import { Character } from './character';


//SavingThrows
let rangerSavingThrowProfs: string[] = ["Strength","Dexterity"]; //Ranger

//Weapon Profs
let rangerWeaponProfs: string[] = ["simple weapons","martial weapons"]; //Ranger

//ArmorProfs
let rangerArmorProfs: string[] = ["light armor","medium armor","shields"]; //Ranger

//ToolProfs
let rangerToolProfs: string[] = []; //Ranger




// Create character objects here
var Ranger : Character = new Character('Ranger',10, rangerSavingThrowProfs, rangerWeaponProfs, rangerArmorProfs, rangerToolProfs, 'WIS'); //this needs arguments in the future


export const ClassCharData: Character[] = [


    //IMPORTANT! I NEED TO MAKE COPIES OF THESE WHEN USED, NOT GRAB THEM AND THEN SET THEIR VALUES DIFFERENTLY
    
    //simply list classes here
    Ranger,



];