import { Component, OnInit, Inject } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'

//requirements
import { RequirementsService } from '../../CreationRequirements/requirements.service';
import { Requirements } from '../../CreationRequirements/Requirements';
import { from } from 'rxjs';

import { Character } from '../../CharacterGen/character';

// components
import { SkillsPopupComponent } from '../skills-popup/skills-popup.component'
import { Race } from 'src/app/CharacterGen/race';

@Component({
  selector: 'app-stats-popup',
  templateUrl: './stats-popup.component.html',
  styleUrls: ['./stats-popup.component.css']
})
export class StatsPopupComponent implements OnInit {

  character: Character;
  requirements: Requirements;
  raceInfo: Race;
  //statistics
  strength: number = 0;
  dexterity: number = 0;
  constitution: number = 0;
  intelligence: number = 0;
  wisdom: number = 0;
  charisma: number = 0;
  //rolled statistics (for keeping rolls while updating text boxes)
  rolledStrength: number;
  rolledDexterity: number;
  rolledConstitution: number;
  rolledIntelligence: number;
  rolledWisdom: number;
  rolledCharisma: number;
  //stat mods
  strengthMod: number = 0;
  dexterityMod: number = 0;
  constitutionMod: number = 0;
  intelligenceMod: number = 0;
  wisdomMod: number = 0;
  charismaMod: number = 0;
  //flag variable
  rolled: boolean = false;
  //racial bonuses
  strBonus: number;
  dexBonus: number;
  conBonus: number;
  intBonus: number;
  wisBonus: number;
  charBonus: number;

  //user input flag
  formIncomplete: boolean;



  constructor(public thisDialogRef: MatDialogRef<StatsPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;
    //racial bonuses
    this.strBonus = this.raceInfo.abilityScoreIncrease[0];
    this.dexBonus = this.raceInfo.abilityScoreIncrease[1];
    this.conBonus = this.raceInfo.abilityScoreIncrease[2];
    this.intBonus = this.raceInfo.abilityScoreIncrease[3];
    this.wisBonus = this.raceInfo.abilityScoreIncrease[4];
    this.charBonus = this.raceInfo.abilityScoreIncrease[5];

    this.formIncomplete = false;
  }

  //mod updates
  updateStrengthMod() {
    if (!this.strength) {
      this.strengthMod = 0;
    } else {
      this.strengthMod = Math.floor((this.strength - 10) / 2);
    }
  }
  updateDexterityMod() {
    if (!this.dexterity) {
      this.dexterityMod = 0;
    } else {
      this.dexterityMod = Math.floor((this.dexterity - 10) / 2);
    }
  }
  updateConstitutionMod() {
    if (!this.constitution) {
      this.constitutionMod = 0;
    } else {
      this.constitutionMod = Math.floor((this.constitution - 10) / 2);
    }
  }
  updateIntelligenceMod() {
    if (!this.intelligence) {
      this.intelligenceMod = 0;
    } else {
      this.intelligenceMod = Math.floor((this.intelligence - 10) / 2);
    }
  }
  updateWisdomMod() {
    if (!this.wisdom) {
      this.wisdomMod = 0;
    } else {
      this.wisdomMod = Math.floor((this.wisdom - 10) / 2);
    }
  }
  updateCharismaMod() {
    if (!this.charisma) {
      this.charismaMod = 0;
    } else {
      this.charismaMod = Math.floor((this.charisma - 10) / 2);
    }
  }
  updateAllMods() {
    this.updateStrengthMod();
    this.updateDexterityMod();
    this.updateConstitutionMod();
    this.updateIntelligenceMod();
    this.updateWisdomMod();
    this.updateCharismaMod();
  }

  //rolling methods
  rollStats() {
    this.rolled = true;
    //Roll results
    this.rolledStrength = this.rollDice();
    this.rolledDexterity = this.rollDice();
    this.rolledConstitution = this.rollDice();
    this.rolledIntelligence = this.rollDice();
    this.rolledWisdom = this.rollDice();
    this.rolledCharisma = this.rollDice();
    //textbox
    this.strength = this.rolledStrength;
    this.dexterity = this.rolledDexterity;
    this.constitution = this.rolledConstitution;
    this.intelligence = this.rolledIntelligence;
    this.wisdom = this.rolledWisdom;
    this.charisma = this.rolledCharisma;
    //update modifiers
    this.updateAllMods();
  }
  rollDice() {
    //create set
    var min = Math.ceil(1);
    var max = Math.floor(6);
    var set = [
      Math.floor(Math.random() * (max - min + 1)) + min,
      Math.floor(Math.random() * (max - min + 1)) + min,
      Math.floor(Math.random() * (max - min + 1)) + min,
      Math.floor(Math.random() * (max - min + 1)) + min
    ];

    //remove least
    var leastIndex = 0;
    for (let i = 1; i < set.length; i++) {
      if (set[i] < set[leastIndex]) {
        leastIndex = i;
      }
    }
    set.splice(leastIndex, 1);
    //add set
    var total = 0;
    for (let i = 0; i < set.length; i++) {
      total = total + set[i];
    }
    //return total
    return total;
  }


  openSkillsPopup() {

    //check user input is complete (if all 6 stats are between 3 and 18 (before racial bonuses))
    if (this.strength < 3 || this.strength > 18 || this.dexterity < 3 || this.dexterity > 18 || this.constitution < 3 || this.constitution > 18 || this.intelligence < 3 || this.intelligence > 18 || this.wisdom < 3 || this.wisdom > 18 || this.charisma < 3 || this.charisma > 18) {
      this.formIncomplete = true;
    }
    else {



      //add racial bonuses
      this.strength = Number(this.strength) + Number(this.strBonus);
      this.dexterity = Number(this.dexterity) + Number(this.dexBonus);
      this.constitution = Number(this.constitution) + Number(this.conBonus);
      this.intelligence = Number(this.intelligence) + Number(this.intBonus);
      this.wisdom = Number(this.wisdom) + Number(this.wisBonus);
      this.charisma = Number(this.charisma) + Number(this.charBonus);

      //assign statistics
      this.character.setStrength(this.strength);
      this.character.setDexterity(this.dexterity);
      this.character.setConstitution(this.constitution);
      this.character.setIntelligence(this.intelligence);
      this.character.setWisdom(this.wisdom);
      this.character.setCharisma(this.charisma);

      //open next popup
      let dialogRef = this.dialog.open(SkillsPopupComponent, {
        // size of popup
        width: '600px',
        // data that gets passed to popup (requirements object)
        data: {
          dialogRequirements: this.requirements,
          dialogCharacter: this.character,
          dialogRaceInfo: this.raceInfo
        }
      });
      this.thisDialogRef.close();
    }
  }

}
