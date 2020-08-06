import { Component, OnInit, Inject, Input } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'

//requirements
import { RequirementsService } from '../../CreationRequirements/requirements.service';
import { Requirements } from '../../CreationRequirements/Requirements';

//character
import { GenerationService } from '../../CharacterGen/generation.service';
import { Character } from '../../CharacterGen/character';

// components
import { StatsPopupComponent } from '../stats-popup/stats-popup.component';

import { Race } from 'src/app/CharacterGen/race';


@Component({
  selector: 'app-class-race-popup',
  templateUrl: './class-race-popup.component.html',
  styleUrls: ['./class-race-popup.component.css']
})
export class ClassRacePopupComponent implements OnInit {

  character: Character;
  requirements: Requirements;
  raceInfo: Race;
  //user submission flag
  formIncomplete: boolean;

  //character generation properties
  name: string = '';
  role: string = '';
  race: string = '';
  background: string = '';
  alignment: string = '';



  constructor(private generationService: GenerationService, private requirementsService: RequirementsService, public thisDialogRef: MatDialogRef<ClassRacePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formIncomplete = false;
  }




  // submits class (and eventually race) and opens skills-popup
  submitClassRace() {

    //check that user input is complete
    if (this.name == '' || this.role == '' || this.race == '' || this.background == "" || this.alignment == '') {
      //if incomplete:
      this.formIncomplete = true;
    } 
    //if all inputs have been made, submit data and move to next form
    else {
      this.formIncomplete = false;
      // submit class
      this.requirementsService.setReqClass(this.role);
      // use class to assign to grab specific requirements object
      this.requirements = this.requirementsService.getClassRequirements();

      // now do the same but for a charData object
      //submit class
      this.generationService.setCharClass(this.role);
      // use class to grab specific character object
      this.character = this.generationService.getCharacterInfo();
      // except now we have to assign the user input in this popup to their respective properties
      this.character.setName(this.name);
      this.character.setRace(this.race); 
      this.character.setBackground(this.background);
      this.character.setAlignment(this.alignment);


      //finally, set and get hardcoded, raceInfo
      this.generationService.setRace(this.race);
      this.raceInfo = this.generationService.getRaceInfo();


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
