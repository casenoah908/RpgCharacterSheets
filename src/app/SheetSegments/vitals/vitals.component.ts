import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

import { GenerationService } from '../../CharacterGen/generation.service';

//icons
import{ faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;

  //icons
  faHeart = faHeart;
  faShield = faShieldAlt;

  tempHp: number;
  healthAdjustment: number = 0;

  dead: boolean = false;

  constructor(private generationService : GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
  }

  changeTempHp(){
    this.characterInfo.setTempHp(this.tempHp);
  }

  successCount: number = 0;
  changeSuccess(event){
    //if checked
    if (event.target.checked == true) {
        //raise count
        this.successCount++;
      //if unchecked
    } else {
      //decrease count
      this.successCount--;
    }
    //if all three are checked, revive character
    if(this.successCount == 3){
      this.characterInfo.setCurrentHp(1);
    }
  }

  failureCount: number = 0;
  changeFailure(event){
    //if checked
    if (event.target.checked == true) {
        //raise count
        this.failureCount++;
      //if unchecked
    } else {
      //decrease count
      this.failureCount--;
    }
    //if all three are checked, revive character
    if(this.failureCount == 3){
      this.dead = true;
    }
  }

  harm(){
    this.characterInfo.setCurrentHp(this.characterInfo.getCurrentHp() - this.healthAdjustment);
    //don't allow health to fall below zero
    if(this.characterInfo.getCurrentHp() < 0){
      this.characterInfo.setCurrentHp(0);
    }
    //reset number box
    this.healthAdjustment = 0;
  }
  heal(){
    this.characterInfo.setCurrentHp(this.characterInfo.getCurrentHp() + this.healthAdjustment);
    //don't allow health to rise above max
    if(this.characterInfo.getCurrentHp() > this.characterInfo.getMaxHp()){
      this.characterInfo.setCurrentHp(this.characterInfo.getMaxHp());
    }
    //reset number box
    this.healthAdjustment = 0;
  }

  toggleInspired(event){
    //if checked
    if (event.target.checked == true) {
      this.characterInfo.setInspired(true);
    //if unchecked
  } else {
    this.characterInfo.setInspired(false);
  }
  }

}
