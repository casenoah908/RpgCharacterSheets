import { Injectable } from '@angular/core';

//Classes
import { Character } from './Objects/character'
import { Race } from './Objects/race';
import { Background } from './Assets/Backgrounds/background';

//Lists
import { ClassCharData } from './Objects/ClassCharData';
import { RaceList } from './Objects/raceList';
import { BackgroundList } from './Assets/Backgrounds/backgroundList';
import { ArmorsList } from './Assets/Items/armorsList';
import { WeaponsList } from './Assets/Items/weaponsList';
import { Weapon } from './Assets/Items/weapon';


@Injectable({
    providedIn: "root",
})

export class GenerationService {

    constructor() { }

    // Class and Race Specific Data
    ClassData = ClassCharData;
    RaceData = RaceList;
    BackgroundData = BackgroundList;

    //character and race objects
    characterInfo: Character;
    raceInfo: Race;

    //weaponLists
    simpleWeaponList: Array<Weapon> = WeaponsList.slice(0, 15);
    simpleMeleeWeaponList: Array<Weapon> = WeaponsList.slice(0, 11);
    simpleRangedWeaponList: Array<Weapon> = WeaponsList.slice(11, 15);
    martialWeaponList: Array<Weapon> = WeaponsList.slice(15, 38);
    martialMeleeWeaponList: Array<Weapon> = WeaponsList.slice(15, 33);
    martialRangedWeaponList: Array<Weapon> = WeaponsList.slice(33, 38);

    //weapon bonus vars
    profBonuses: Array<number> = [];
    statBonuses: Array<number> = [];
    attackBonuses: Array<number> = [];



    //-------------------------------//
    //--- Character Instantiation ---//
    //-------------------------------//

    // Pass "menu" of requirements
    // searches through ClassCharData for a Character object that matches 
    // the class/role, and assigns it to a character variable that gets
    // returned
    getCharacterInfo(value: string) {
        var character: Character; //This doesn't appear to make it void
        this.ClassData.forEach(item => {
            if (item.getRole() == value) {
                character = item;
            }
        })
        return character;
    };

    //get Race Info (from RaceList)
    getRaceInfo(value: string) {
        var raceInfo: Race;
        this.RaceData.forEach(item => {
            if (item.name == value) {
                raceInfo = item;
            }
        })
        return raceInfo;
    };

    getBackgroundInfo(value: string) {
        var background: Background;
        this.BackgroundData.forEach(item => {
            if (item.name == value) {
                background = item;
            }
        })
        return background;
    };




    //------------------------------//
    //--- Character Finalization ---//
    //------------------------------//

    //takes a character object from final popup and sets any remaining values left to be assigned
    finalizeCharacter(passedCharacter: Character, passedRace: Race) {
        //character object
        var character = passedCharacter;
        //statMods
        var strengthMod = (Math.floor((character.getStrength() - 10) / 2));
        var dexterityMod = (Math.floor((character.getDexterity() - 10) / 2));
        var constitutionMod = (Math.floor((character.getConstitution() - 10) / 2));
        var intelligenceMod = (Math.floor((character.getIntelligence() - 10) / 2));
        var wisdomMod = (Math.floor((character.getWisdom() - 10) / 2));
        var charismaMod = (Math.floor((character.getCharisma() - 10) / 2));

        //SET VALUES NOT FINISHED IN POPUPS

        //VITALS
        //armor class (need to make armor objects)
        if (character.getEquippedArmor().classification == 'Light Armor') {
            character.setArmorClass(character.getEquippedArmor().armorClass + dexterityMod);
        }
        else if (character.getEquippedArmor().classification == 'Medium Armor') {
            console.log('Reached medium aromr if')
            var limitedDexMod = dexterityMod;
            if (dexterityMod > 2) {
                limitedDexMod = 2;
            }
            character.setArmorClass(character.getEquippedArmor().armorClass + limitedDexMod);
        }
        else if (character.getEquippedArmor().classification == 'Heavy Armor') {
            character.setArmorClass(character.getEquippedArmor().armorClass);
        }
        else{
            character.setArmorClass(10);
        }

        //max hp
        character.setMaxHp(character.getHitDice() + constitutionMod); //hit dice max + constitution mod, uses max hp for 1st character
        //current hp
        character.setCurrentHp(character.getMaxHp()); //start current hp at max
        //intiative
        character.setInitiative(dexterityMod);
        //speed
        character.setSpeed(passedRace.speed);
        //passive wisdom (checks for perception proficiency)
        var perceptionProf = false;
        for (let i = 0; i < character.getSkillProfs().length; i++) {
            if (character.getSkillProfs()[i] == 'Perception') {
                perceptionProf = true;
            }
        }
        if (perceptionProf) { //if proficient in perception, add proficiency bonus
            character.setPassiveWisdom((10 + wisdomMod) + character.getProficiencyBonus());
        } else { //if not propficient in perception, don't add proficienty bonus
            character.setPassiveWisdom(10 + wisdomMod);
        }

        //weapons (retrieving bonuses and types)
        this.createBonusArrays(character);


        //SPELLS (determined by spellcasting ability)
        if (character.getSpellcastingAbility() == 'Wisdom') {
            //spellSaveDC
            character.setSpellSaveDC(8 + character.getProficiencyBonus() + wisdomMod); //8 + prof bonus + wisdomMod
            //spellAttackBonus
            character.setSpellAttackBonus(character.getProficiencyBonus() + wisdomMod); // prof bonus + wisdomMod
        }
        if (character.getSpellcastingAbility() == 'Intelligence') {
            //spellSaveDC
            character.setSpellSaveDC(8 + character.getProficiencyBonus() + intelligenceMod); //8 + prof bonus + intelligenceMod
            //spellAttackBonus
            character.setSpellAttackBonus(character.getProficiencyBonus() + intelligenceMod); // prof bonus + intelligenceMod
        }
        if (character.getSpellcastingAbility() == 'Charisma') {
            //spellSaveDC
            character.setSpellSaveDC(8 + character.getProficiencyBonus() + charismaMod); //8 + prof bonus + charismaMod
            //spellAttackBonus
            character.setSpellAttackBonus(character.getProficiencyBonus() + charismaMod);// prof bonus + charismaMod
        } else {
            //character has none
        }



    };

    //Language cannot be done in finalize character or else languages will be added to every time they're removed and then it's called
    setLanguages(passedCharacter: Character, passedRace: Race){
        //character object
        var character = passedCharacter;
        var race = passedRace;
        //languages
        for (let i = 0; i < race.languages.length; i++) {
            character.addLanguages(race.languages[i]);
        }
    }

    //hold character and race info for passing between routers
    holdInfo(characterInfo: Character, raceInfo: Race) {
        this.characterInfo = characterInfo;
        this.raceInfo = raceInfo;
    };
    //get character and race info (for passing between routers)
    getPassedCharacterInfo() {
        return this.characterInfo;
    };
    getPassedRaceInfo() {
        return this.raceInfo;
    };




    //-----------------//
    //--- Equipment ---//
    //-----------------//

    addEquipment(splitString: Array<string>, character: Character) {
        //iterate over splitString (one passed item at a time)
        for (let i = 0; i < splitString.length; i++) {
            //set flag to check if item has been found, so that if it's found in say, armors, it won't be searched for in weapons
            var found: Boolean = false;
            var additionCount: number = 1;
            //check if choice has a two
            if (splitString[i].includes("two")) {
                //remove the two
                splitString[i] = splitString[i].replace('two ', '');
                //remove the s to make it singular
                splitString[i] = splitString[i].slice(0, -1);
                additionCount = 2;
            }
            if (splitString[i].includes("five")) {
                //remove the five
                splitString[i] = splitString[i].replace('five ', '');
                //remove the s to make it singular
                splitString[i] = splitString[i].slice(0, -1);
                additionCount = 5;
            }
            //check if it exists in armor
            for (let a = 0; a < ArmorsList.length; a++) {
                //if current armor equals current selectedItem...
                // console.log("At Comparison. splitString[i]: " + splitString[i].toString() + " ArmorsList[a]: " + ArmorsList[a].name.toLowerCase());
                if (ArmorsList[a].name.toLowerCase() === splitString[i]) {
                    //set flag to true, to stop checking lists
                    found = true;
                    //add to armors from ArmorList in order to have full armor object in character's data
                    character.addArmor(ArmorsList[a]);
                    //if it's not a shield, equip it
                    if(!ArmorsList[a].name.toLowerCase().includes('shield')){
                        character.setEquippedArmor(ArmorsList[a]);
                    }
                    
                    //return so program stops checking armors
                }
            }

            //if splitString item has not been found in armors (if it's a weapon) ...
            if (!found) {
                //check if item exists in weapons
                for (let w = 0; w < WeaponsList.length; w++) {
                    //if current weapon equals current selectedItem...
                    if (WeaponsList[w].name.toLowerCase() === splitString[i]) {
                        //set flag to true, to stop checking lists
                        found = true;
                        // //add to weapons from WeaponsList in order to have full weapon object in character's data
                        for (let i = 0; i < additionCount; i++) {
                            character.addWeapon(WeaponsList[w]);
                        }
                        //return so program stops checking weapons
                    }
                }
            }
            //if it's not an armor or weapon...
            if (!found) {
                //Then it must be an ammunition (like, 20 arrows or something)
                if (!splitString[i].includes('simple')) {
                    if (!splitString[i].includes('martial')) {
                        character.addOthers(splitString[i]);
                    }
                }
            }

            //Now, move on to next item in Equipment Popup Component selection
        }
        //iteration over splitSelection finished
    }

    checkProficiency(weapon: Weapon, character: Character) {
        //Compile a list of every individual weapon name
        var profList: Array<string> = [];
        for (let i = 0; i < character.getWeaponProfs().length; i++) {
            profList.push(character.getWeaponProfs()[i]);
        }
        var proficient: boolean = false;

        //THIS IS WHAT IS ADDING TO WEAPON PROFS
        for (let i = 0; i < profList.length; i++) {

            //SIMPLE WEAPONS
            //check for simple weapons
            if (profList[i].toLowerCase().includes('simple weapon')) {
                //add simple weapons to profList
                for (let i = 0; i < this.simpleWeaponList.length; i++) {
                    profList.push(this.simpleWeaponList[i].name.toLowerCase() + "s");
                }
            }
            //check for simple melee weapon
            if (profList[i].toLowerCase().includes('simple melee weapon')) {
                //add simple melee weapons to profList
                for (let i = 0; i < this.simpleMeleeWeaponList.length; i++) {
                    profList.push(this.simpleMeleeWeaponList[i].name.toLowerCase() + "s");
                }
            }
            //check for simple ranged weapon
            if (profList[i].toLowerCase().includes('simple ranged weapon')) {
                //add simple ranged weapons to profList
                for (let i = 0; i < this.simpleRangedWeaponList.length; i++) {
                    profList.push(this.simpleRangedWeaponList[i].name.toLowerCase() + "s");
                }
            }

            //MARTIAL WEAPONS
            //check for martial weapons
            if (profList[i].toLowerCase().includes('martial weapon')) {
                //add simple weapons to profList
                for (let i = 0; i < this.martialWeaponList.length; i++) {
                    profList.push(this.martialWeaponList[i].name.toLowerCase() + "s");
                }
            }
            //check for martial melee weapon
            if (profList[i].toLowerCase().includes('martial melee weapon')) {
                //add martial melee weapons to profList
                for (let i = 0; i < this.martialMeleeWeaponList.length; i++) {
                    profList.push(this.martialMeleeWeaponList[i].name.toLowerCase() + "s");
                }
            }
            //check for martial ranged weapon
            if (profList[i].toLowerCase().includes('martial ranged weapon')) {
                //add martial ranged weapons to profList
                for (let i = 0; i < this.martialRangedWeaponList.length; i++) {
                    profList.push(this.martialRangedWeaponList[i].name.toLowerCase() + "s");
                }
            }
        }


        //if weapon name equals a weapon name in profList, return true
        for (let i = 0; i < profList.length; i++) {
            //cut off the plurality ("s") from the proficiency
            if (profList[i].substring(0,profList[i].length -1).toLowerCase()===(weapon.name.toLowerCase())) {
                proficient = true;
            }
        }
        //else return false
        return proficient;

    }

    createBonusArrays(character: Character) {
        //clear prof bonuses and list everytime it's called, and reset attack bonuses and damage bonuses
        this.profBonuses = [];
        this.statBonuses = [];
        this.attackBonuses = [];
        // this.characterInfo.setAttackBonuses( [] );
        // this.characterInfo.setDamageBonuses( [] );
        //create array of profBonuses to add to weapons
        for (let i = 0; i < character.getWeapons().length; i++) {
            if (!(character.getWeapons()[i].name.includes('simple')) && !(character.getWeapons()[i].name.includes('martial'))) {
                if (this.checkProficiency(character.getWeapons()[i], character)) {
                    this.profBonuses.push(character.getProficiencyBonus());
                } else {
                    this.profBonuses.push(0);
                }
            }else{
                this.profBonuses.push(0);
            }
        }

        //create array of statBonuses based on if strength or dexterity can be used and which is better
        for (let i = 0; i < character.getWeapons().length; i++) {
            var statBonus: number = 0;
            //set statBonus based upon the first bonus type
            if (character.getWeapons()[i].bonusType[0] === 'strength') {
                //set statBonus to strength mod
                statBonus = Math.floor((character.getStrength() - 10) / 2);
            }
            else if (character.getWeapons()[i].bonusType[0] === 'dexterity') {
                statBonus = Math.floor((character.getDexterity() - 10) / 2);
            }
            //iterate over each weapon's bonus types
            for (let k = 1; k < character.getWeapons()[i].bonusType.length; k++) {
                //if weapon uses strength and strength bonus is better than the current bonus...
                if ((character.getWeapons()[i].bonusType[k] === 'strength') && (Math.floor((character.getStrength() - 10) / 2) > statBonus)) {
                    //set statBonus to strength mod
                    statBonus = Math.floor((character.getStrength() - 10) / 2);
                }
                //if weapon uses dexterity and dexterity bonus is better than the current bonus...
                else if ((character.getWeapons()[i].bonusType[k] === 'dexterity') && (Math.floor((character.getDexterity() - 10) / 2) > statBonus)) {
                    //set statBonus to dexterity mod
                    statBonus = Math.floor((character.getDexterity() - 10) / 2);
                }
            }
            this.statBonuses.push(statBonus);
        }

        //combine arrays to make attackBonuses
        for (let i = 0; i < character.getWeapons().length; i++) {
            this.attackBonuses.push(this.profBonuses[i] + this.statBonuses[i]);
            //testing 
            // console.log("Prof Bonus - " + i + ":")
            // console.log(this.profBonuses[i]);
            // console.log("Stat Bonus - " + i + ":")
            // console.log(this.statBonuses[i]);
            // console.log("Attack Bonus - " + i + ":")
            // console.log(this.attackBonuses[i]);
        }
        character.setAttackBonuses(this.attackBonuses);
        character.setDamageBonuses(this.statBonuses);
    }



}