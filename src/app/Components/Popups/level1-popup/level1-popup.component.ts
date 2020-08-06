import { Component, OnInit, Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { Character } from '../../../CharacterGen/Objects/character';
import { Weapon } from '../../../CharacterGen/Assets/Items/weapon';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Race } from 'src/app/CharacterGen/Objects/race';

import { Router } from '@angular/router';

import { GenerationService } from '../../../CharacterGen/generation.service';
import { ClassTrait } from 'src/app/CharacterGen/Objects/classTrait';

@Component({
  selector: 'app-level1-popup',
  templateUrl: './level1-popup.component.html',
  styleUrls: ['./level1-popup.component.css']
})
export class Level1PopupComponent implements OnInit {

  constructor(private generationService: GenerationService, @Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<Level1PopupComponent>, private router: Router) { }

  requirements: Requirements;
  character: Character;
  raceInfo: Race;

  //user input flag
  formIncomplete: boolean;

  selectedChoices: Array<string> = [];
  selectedChoice1: string;
  selectedChoice2: string;

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;
    //clear arrays so they reset each time it opens
    this.character.clearClassTraits();

    this.formIncomplete = false;


    if (this.requirements.level1Traits[0] != null) {
      this.selectedChoice1 = "placeholder";
    }
    if (this.requirements.level1Traits[1] != null) {
      this.selectedChoice2 = "placeholder";
    }
  }


  createCharacterSheet() {

    //set choices to "" if there are none
    if (this.requirements.level1Traits[0] != null && this.requirements.level1Traits[0].choices.length == 0) {
      this.selectedChoice1 = "";
    }
    if (this.requirements.level1Traits[1] != null && this.requirements.level1Traits[1].choices.length == 0) {
      this.selectedChoice2 = "";
    }

    //check user input
    //if user has not made a choice for each class ability...
    if (this.selectedChoice1 == "placeholder" || this.selectedChoice2 == "placeholder") {
      this.formIncomplete = true;
    }

    //if user has mad a choice for each class ability...
    else {
      this.selectedChoices.push(this.selectedChoice1);
      this.selectedChoices.push(this.selectedChoice2);
      //assign values

      for (let i = 0; i < this.requirements.level1Traits.length; i++) {
        var classTrait: ClassTrait = { header: this.requirements.level1Traits[i].header, description: this.requirements.level1Traits[i].description, choice: this.selectedChoices[i] };
        this.character.getClassTraits().push(classTrait); //couldn't call addClassTraits, but getClassTraits().push worked????? confusing.
      }


      this.thisDialogRef.close();

      this.generationService.finalizeCharacter(this.character, this.raceInfo);
      //send character and raceInfo to generation service
      this.generationService.holdInfo(this.character, this.raceInfo);
      //Then, navigate to sheet, where on the sheet the character is grabbed by an id that is passed through router
      this.router.navigateByUrl('sheet');
      //Instead, we may want to post character and race Info to a database (may need to add id to character, as well as raceInfo object) in the future.
    }
  }




}
