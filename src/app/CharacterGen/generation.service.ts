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


@Injectable({
    providedIn: "root",
})

export class GenerationService {

    constructor(){}

    // Class and Race Specific Data
    ClassData = ClassCharData;
    RaceData = RaceList;
    BackgroundData = BackgroundList;

    //character and race objects
    characterInfo: Character;
    raceInfo: Race;


    // Pass "menu" of requirements
    // searches through ClassCharData for a Character object that matches 
    // the class/role, and assigns it to a character variable that gets
    // returned
    getCharacterInfo(value: string){
        var character: Character; //This doesn't appear to make it void
        this.ClassData.forEach(item => {
            if(item.getRole() == value){
                character = item;
            }
        })
        return character;
    };
    
    //get Race Info (from RaceList)
    getRaceInfo(value: string){
        var raceInfo: Race; 
        this.RaceData.forEach(item => {
            if(item.name == value){
                raceInfo = item;
            }
        })
        return raceInfo;
    };

    getBackgroundInfo(value: string){
        var background: Background;
        this.BackgroundData.forEach(item => {
            if(item.name == value){
                background = item;
            }
        })
        return background;
    };
    

    //takes a character object from final popup and sets any remaining values left to be assigned
    finalizeCharacter(passedCharacter:Character, passedRace: Race){
        //character object
        var character = passedCharacter;
        var race = passedRace;
        //statMods
        var strengthMod = (Math.floor((character.getStrength()-10) / 2) );
        var dexterityMod = (Math.floor((character.getDexterity()-10) / 2) );
        var constitutionMod = (Math.floor((character.getConstitution()-10) / 2) );
        var intelligenceMod = (Math.floor((character.getIntelligence()-10) / 2) );
        var wisdomMod = (Math.floor((character.getWisdom()-10) / 2) );
        var charismaMod = (Math.floor((character.getCharisma()-10) / 2) );

        //SET VALUES NOT FINISHED IN POPUPS

        //VITALS
        //armor class (need to make armor objects)
        if(character.getEquippedArmor().classification == 'Light Armor'){
            character.setArmorClass(character.getEquippedArmor().armorClass + dexterityMod);
        }
        else if(character.getEquippedArmor().classification == 'Medium Armor'){
            console.log('Reached medium aromr if')
            var limitedDexMod = dexterityMod;
            if(dexterityMod > 2){
                limitedDexMod = 2;
            }
            character.setArmorClass(character.getEquippedArmor().armorClass + limitedDexMod);
        }
        else if(character.getEquippedArmor().classification == 'Heavy Armor'){
            character.setArmorClass(character.getEquippedArmor().armorClass);
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
        for(let i=0; i<character.getSkillProfs().length; i++){
            if(character.getSkillProfs()[i]=='Perception'){
                perceptionProf = true;
            }
        }
        if(perceptionProf){ //if proficient in perception, add proficiency bonus
            character.setPassiveWisdom((10+wisdomMod)+character.getProficiencyBonus());
        }else{ //if not propficient in perception, don't add proficienty bonus
            character.setPassiveWisdom(10+wisdomMod);
        }

        //languages
        for(let i=0; i<race.languages.length; i++){
            character.addLanguages(race.languages[i]);
        }
        
        
        //SPELLS (determined by spellcasting ability)
        if(character.getSpellcastingAbility()=='Wisdom'){
            //spellSaveDC
            character.setSpellSaveDC(8+character.getProficiencyBonus()+wisdomMod); //8 + prof bonus + wisdomMod
            //spellAttackBonus
            character.setSpellAttackBonus(character.getProficiencyBonus()+wisdomMod); // prof bonus + wisdomMod
        }
        if(character.getSpellcastingAbility()=='Intelligence'){
            //spellSaveDC
            character.setSpellSaveDC(8+character.getProficiencyBonus()+intelligenceMod); //8 + prof bonus + intelligenceMod
            //spellAttackBonus
            character.setSpellAttackBonus(character.getProficiencyBonus()+intelligenceMod); // prof bonus + intelligenceMod
        }
        if(character.getSpellcastingAbility()=='Charisma'){
            //spellSaveDC
            character.setSpellSaveDC(8+character.getProficiencyBonus()+charismaMod); //8 + prof bonus + charismaMod
            //spellAttackBonus
            character.setSpellAttackBonus(character.getProficiencyBonus()+charismaMod);// prof bonus + charismaMod
        }else{
            //character has none
        }
        
    };

    //hold character and race info for passing between routers
    holdInfo(characterInfo:Character, raceInfo: Race){
        this.characterInfo = characterInfo;
        this.raceInfo = raceInfo;
    };
    //get character and race info (for passing between routers)
    getPassedCharacterInfo(){
        return this.characterInfo;
    };
    getPassedRaceInfo(){
        return this.raceInfo;
    };

    addEquipment(splitString: Array<string>, character: Character){
        //iterate over splitString (one passed item at a time)
        for(let i=0; i<splitString.length; i++){
            //set flag to check if item has been found, so that if it's found in say, armors, it won't be searched for in weapons
            var found: Boolean = false;
            var additionCount: number = 1;
            //check if choice has a two
            if(splitString[i].includes("two")){
                //remove the two
                splitString[i] = splitString[i].replace('two ','');
                //remove the s to make it singular
                splitString[i] = splitString[i].slice(0,-1);
                additionCount = 2;
            }
            if(splitString[i].includes("five")){
                //remove the five
                splitString[i] = splitString[i].replace('five ','');
                //remove the s to make it singular
                splitString[i] = splitString[i].slice(0,-1);
                additionCount = 5;
            }
            //check if it exists in armor
            for(let a=0; a<ArmorsList.length; a++){
                //if current armor equals current selectedItem...
                // console.log("At Comparison. splitString[i]: " + splitString[i].toString() + " ArmorsList[a]: " + ArmorsList[a].name.toLowerCase());
                if(ArmorsList[a].name.toLowerCase() === splitString[i]){
                    //set flag to true, to stop checking lists
                    found = true;
                    //add to armors from ArmorList in order to have full armor object in character's data
                    character.addArmor(ArmorsList[a]);
                    character.setEquippedArmor(ArmorsList[a]); 
                    //return so program stops checking armors
                }
            }
            
            //if splitString item has not been found in armors (if it's a weapon) ...
            if(!found){
                //check if item exists in weapons
                for(let w=0; w<WeaponsList.length; w++){
                    //if current weapon equals current selectedItem...
                    if(WeaponsList[w].name.toLowerCase() === splitString[i]){
                        //set flag to true, to stop checking lists
                        found = true;
                        // //add to weapons from WeaponsList in order to have full weapon object in character's data
                        for(let i=0; i<additionCount; i++){
                            character.addWeapon(WeaponsList[w]);
                        } 
                        //return so program stops checking weapons
                    }
                }
            }
            //if it's not an armor or weapon...
            if(!found){
                //Then it must be an ammunition (like, 20 arrows or something)
                if(!splitString[i].includes('simple')){
                    if(!splitString[i].includes('martial')){
                        character.addOthers(splitString[i]);
                    }
                }
            }

            //Now, move on to next item in Equipment Popup Component selection
        }
        //iteration over splitSelection finished
    }

}