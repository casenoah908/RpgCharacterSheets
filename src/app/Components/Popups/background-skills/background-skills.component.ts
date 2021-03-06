import { Component, OnInit, Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { SkillsPopupComponent } from '../skills-popup/skills-popup.component';
import { Character } from 'src/app/CharacterGen/Objects/character';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-background-skills',
  templateUrl: './background-skills.component.html',
  styleUrls: ['./background-skills.component.css']
})
export class BackgroundSkillsComponent implements OnInit {

  character: Character;
  requirements: Requirements;
  raceInfo: Race;
  backgroundProfs: Array<string>;
  limit: number;
  //user input flag
  formIncomplete: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<BackgroundSkillsComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;
    this.backgroundProfs = this.data.dialogBackgroundInfo;
    this.limit = Number(this.backgroundProfs[0]);
    this.formIncomplete = false;

    this.removeExtraProfs();
  }

  removeExtraProfs(){
    for (let i =0; i<this.character.getSkillProfs().length; i++){
      for (let j=1; j<this.backgroundProfs.length; j++){
        if(this.backgroundProfs[j] == this.character.getSkillProfs()[i]){
          //remove proficiency from display list if character already has it.
          this.backgroundProfs.splice(j,1);
        }
      }
    }
  }

  checkCount: number = 0;
  editSkillProfs(event, skill: string) {
    //if checked
    if (event.target.checked == true) {
      //check limit
      if (this.checkCount < this.limit) {
        //add to proficiencies
        this.character.addSkillProfs(skill);
        //raise limit
        this.checkCount++;
        //if limit woulld be exceeded
      } else {
        //refuse selection
        event.target.checked = false;
      }
      //if unchecked
    } else {
      //remove from proficiencies
      this.character.removeSkillProfs(skill);
      //decrease limit
      this.checkCount--;
    }
  }

  openSkillsPopup() {

    //check user input is complete
    if (this.checkCount != this.limit) {
      this.formIncomplete = true;
    }
    //if the user has selected maximum amount of skills...
    else {
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
