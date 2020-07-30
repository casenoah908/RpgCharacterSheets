import { Component, OnInit,Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { Character } from '../../CharacterGen/character';
import { Weapon } from '../../CharacterGen/weapon';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { from } from 'rxjs';
import { Race } from 'src/app/CharacterGen/race';

import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-level1-popup',
  templateUrl: './level1-popup.component.html',
  styleUrls: ['./level1-popup.component.css']
})
export class Level1PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<Level1PopupComponent>, private router : Router) { }

  requirements: Requirements;
  character: Character;
  raceInfo: Race;

  selectedChoice1: string = "";
  selectedChoice2: string = "";

  //Equipment popup testing
  // someWeapons: Array<string>;
  // someArmors: Array<string>;
  // somePacks: Array<string>;

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;
    //clear arrays so they reset each time it opens
    this.character.clearLevelAbilities();
    //Equipment popup testing
    // this.someWeapons = this.character.getWeapons();
    // this.someArmors = this.character.getArmors();
    // this.somePacks = this.character.getPacks();
  }


  createCharacterSheet(){

    //assign values
    this.character.addLevelAbility(this.selectedChoice1);
    this.character.addLevelAbility(this.selectedChoice2);

    this.thisDialogRef.close();

    //First, post character and race Info to a database (may need to add id to character, as well as raceInfo object)
    //DO THAT HERE
    //Then, navigate to sheet, where on the sheet the character is grabbed by an id that is passed through router
    this.router.navigateByUrl('sheet');
  }

  

}
