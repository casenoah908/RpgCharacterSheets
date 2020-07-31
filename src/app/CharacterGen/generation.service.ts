import { Injectable } from '@angular/core';
import { Character } from './character'
import { ClassCharData } from './ClassCharData';
import { RaceList } from './raceList';
import { Race } from './race';

@Injectable({
    providedIn: "root",
})

export class GenerationService {

    currentClass: string = "";
    currentRace: string = "";

    

    constructor(){}

    // Class and Race Specific Data
    ClassData = ClassCharData;
    RaceData = RaceList;

    //character and race objects
    characterInfo: Character;
    raceInfo: Race;


    // Pass "menu" of requirements
    // searches through ClassCharData for a Character object that matches 
    // the class/role, and assigns it to a character variable that gets
    // returned
    getCharacterInfo(){
        var character: Character; //This doesn't appear to make it void
        this.ClassData.forEach(item => {
            if(item.getRole() == this.currentClass){
                character = item;
            }
        })
        return character;
    }
    
    //get Race Info (from RaceList)
    getRaceInfo(){
        var raceInfo: Race; 
        this.RaceData.forEach(item => {
            if(item.name == this.currentRace){
                raceInfo = item;
            }
        })
        return raceInfo;
    }
    
    // class is switched to role because class is a bad variable name in coding
    // sets the currentClass to the role that was selected by user
    setCharClass(role){
        this.currentClass = role;
    }
    //set the current race
    setRace(race){
        this.currentRace = race;
    }

    //takes a character object from final popup and sets any remaining values left to be assigned
    finalizeCharacter(passedCharacter:Character, passedRace: Race){
        //character object
        var character = passedCharacter;
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
        
    }

    //hold character and race info for passing between routers
    holdInfo(characterInfo:Character, raceInfo: Race){
        this.characterInfo = characterInfo;
        this.raceInfo = raceInfo;
    }
    //get character and race info (for passing between routers)
    getPassedCharacterInfo(){
        return this.characterInfo;
    }
    getPassedRaceInfo(){
        return this.raceInfo;
    }

}