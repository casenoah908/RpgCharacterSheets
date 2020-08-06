import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

import { GenerationService } from '../../CharacterGen/generation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;

  constructor(private generationService : GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
  }

  getSkillBonus(stat: string, skill: string){
    var bonus = 0;
    //iterate over skill proficiency list
    for(let i=0; i<this.characterInfo.getSkillProfs().length; i++){
      if(this.characterInfo.getSkillProfs()[i] == skill){
        //add proficiency bonus if proficient (if expertise, two listings in skillProfs will add twice)
        bonus = bonus + this.characterInfo.getProficiencyBonus();
      }
    }
    //after checking proficiency, assign statistic based bonus (wisdom, strength, etc.)
    if(stat == 'Strength'){
      bonus = bonus + Math.floor((this.characterInfo.getStrength() - 10) / 2);
    }
    if(stat == 'Dexterity'){
      bonus = bonus + Math.floor((this.characterInfo.getDexterity() - 10) / 2);
    }
    if(stat == 'Constitution'){
      bonus = bonus + Math.floor((this.characterInfo.getConstitution() - 10) / 2);
    }
    if(stat == 'Intelligence'){
      bonus = bonus + Math.floor((this.characterInfo.getIntelligence() - 10) / 2);
    }
    if(stat == 'Wisdom'){
      bonus = bonus + Math.floor((this.characterInfo.getWisdom() - 10) / 2);
    }
    if(stat == 'Charisma'){
      bonus = bonus + Math.floor((this.characterInfo.getCharisma() - 10) / 2);
    }

    //return stat based bonus + potentially proficiency or expertise bonus. If it's less than zero, don't add a plus sign to the passed string. (If done through template, we'd have potential for + -1 being posted.)
    if(bonus < 0){
      return bonus;
    }else{
      return '+' + bonus;
    } 
    

  }

  getSaveBonus(stat: string){
    var bonus = 0;
    //iterate over saving throw proficiency list
    for(let i=0; i<this.characterInfo.getSavingThrowProfs().length; i++){
      if(this.characterInfo.getSavingThrowProfs()[i] == stat){
        //add proficiency bonus if proficient 
        bonus = bonus + this.characterInfo.getProficiencyBonus();
      }
    }
    //after checking proficiency, assign statistic based bonus (wisdom, strength, etc.)
    if(stat == 'Strength'){
      bonus = bonus + Math.floor((this.characterInfo.getStrength() - 10) / 2);
    }
    if(stat == 'Dexterity'){
      bonus = bonus + Math.floor((this.characterInfo.getDexterity() - 10) / 2);
    }
    if(stat == 'Constitution'){
      bonus = bonus + Math.floor((this.characterInfo.getConstitution() - 10) / 2);
    }
    if(stat == 'Intelligence'){
      bonus = bonus + Math.floor((this.characterInfo.getIntelligence() - 10) / 2);
    }
    if(stat == 'Wisdom'){
      bonus = bonus + Math.floor((this.characterInfo.getWisdom() - 10) / 2);
    }
    if(stat == 'Charisma'){
      bonus = bonus + Math.floor((this.characterInfo.getCharisma() - 10) / 2);
    }

    //return stat based bonus + potentially proficiency or expertise bonus. If it's less than zero, don't add a plus sign to the passed string. (If done through template, we'd have potential for + -1 being posted.)
    if(bonus < 0){
      return bonus;
    }else{
      return '+' + bonus;
    } 
  }

}
