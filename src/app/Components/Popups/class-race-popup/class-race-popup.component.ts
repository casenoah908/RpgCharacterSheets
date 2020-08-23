import { Component, OnInit, Inject, Input } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'

//requirements
import { RequirementsService } from '../../../CreationRequirements/requirements.service';
import { Requirements } from '../../../CreationRequirements/Requirements';

//character
import { GenerationService } from '../../../CharacterGen/generation.service';
import { Character } from '../../../CharacterGen/Objects/character';

// components
import { StatsPopupComponent } from '../stats-popup/stats-popup.component';

import { Race } from 'src/app/CharacterGen/Objects/race';

import { Background } from '../../../CharacterGen/Assets/Backgrounds/background';
import { BackgroundList } from '../../../CharacterGen/Assets/Backgrounds/backgroundList';


@Component({
  selector: 'app-class-race-popup',
  templateUrl: './class-race-popup.component.html',
  styleUrls: ['./class-race-popup.component.css']
})
export class ClassRacePopupComponent implements OnInit {

  character: Character;
  requirements: Requirements;
  raceInfo: Race;
  backgroundInfo: Background;
  backgroundList: Array<Background> = BackgroundList;
  //user submission flag
  formIncomplete: boolean;

  //character generation properties
  name: string = '';
  role: string = '';
  race: string = '';
  background: string = '';
  alignment: string = '';


  userId: number;


  constructor(private generationService: GenerationService, private requirementsService: RequirementsService, public thisDialogRef: MatDialogRef<ClassRacePopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formIncomplete = false;
    this.userId = this.data.dialogUser.id;
  }




  // submits class (and eventually race) and opens skills-popup
  submitClassRace() {

    //--------------------//
    //-- Input Checking --//
    //--------------------//
    //check that user input is complete
    if (this.name == '' || this.role == '' || this.race == '' || this.background == "" || this.alignment == '') {
      //if incomplete:
      this.formIncomplete = true;
    }

    //if all inputs have been made, submit data and move to next form
    else {
      this.formIncomplete = false;

      //---------------------//
      //-- Retreiving Data --//
      //---------------------//
      // use class to assign to grab specific requirements object
      this.requirements = this.requirementsService.getClassRequirements(this.role);

      // now do the same but for a charData object
      this.character = this.generationService.getCharacterInfo(this.role);
      this.character.setUser(this.userId);
      //get hardcoded raceInfo
      this.raceInfo = this.generationService.getRaceInfo(this.race);

      //finally, get hardcoded background profs
      this.backgroundInfo = this.generationService.getBackgroundInfo(this.background);


      //------------------//
      //-- Setting Data --//
      //------------------//
      // except now we have to assign the user input in this popup to their respective properties
      this.character.setName(this.name);
      this.character.setRace(this.race);
      this.raceInfo.skillProficiencies.forEach(item => {
        this.character.addSkillProfs(item);
      });
      this.character.setBackground(this.background);
      this.character.setAlignment(this.alignment);
      //add to proficiencies from background proficiencies (could be none, one, or two)
      this.backgroundInfo.proficiencies.forEach(item => {
        this.character.addSkillProfs(item);
      });

      //--------------------//
      //-- Open New Popup --//
      //--------------------//
      let dialogRef = this.dialog.open(StatsPopupComponent, {
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
