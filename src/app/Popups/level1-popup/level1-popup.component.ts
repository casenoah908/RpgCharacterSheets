import { Component, OnInit,Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { Character } from '../../CharacterGen/character';
import { Weapon } from '../../CharacterGen/weapon';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Race } from 'src/app/CharacterGen/race';

import { Router} from '@angular/router';

import{ GenerationService } from '../../CharacterGen/generation.service';

@Component({
  selector: 'app-level1-popup',
  templateUrl: './level1-popup.component.html',
  styleUrls: ['./level1-popup.component.css']
})
export class Level1PopupComponent implements OnInit {

  constructor(private generationService : GenerationService, @Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<Level1PopupComponent>, private router : Router) { }

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

    this.generationService.finalizeCharacter(this.character,this.raceInfo);
    //send character and raceInfo to generation service
    this.generationService.holdInfo(this.character,this.raceInfo);
    //Then, navigate to sheet, where on the sheet the character is grabbed by an id that is passed through router
    this.router.navigateByUrl('sheet');
    //Instead, we may want to post character and race Info to a database (may need to add id to character, as well as raceInfo object) in the future.
  }

  

}
