import { Component, OnInit, Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { EquipmentPopupComponent } from '../equipment-popup/equipment-popup.component';
import { Character } from 'src/app/CharacterGen/Objects/character';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-skills-popup',
  templateUrl: './skills-popup.component.html',
  styleUrls: ['./skills-popup.component.css']
})
export class SkillsPopupComponent implements OnInit {

  // so my "data" is passed through popups, not property binding like cafe-ex-machina
  // so this probably isnt going to work with @Input
  // @Input() data: Requirements;

  character: Character;
  requirements: Requirements;
  raceInfo: Race;
  limit: number;

  //user input flag
  formIncomplete: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<SkillsPopupComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;
    this.limit = Number(this.requirements.skills[0]); 
    this.formIncomplete = false;
    
    this.removeExtraProfs();
    
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

  removeExtraProfs(){
    for(let i=0; i<this.character.getSkillProfs().length; i++){
      for(let k=1; k<this.requirements.skills.length; k++){
        if(this.character.getSkillProfs()[i] === this.requirements.skills[k]){
          this.requirements.skills.splice(k,1);
        }
      }
    }
  }



  openEquipmentPopup() {

    //check user input is complete
    if (this.checkCount != this.limit) {
      this.formIncomplete = true;
    }
    //if the user has selected maximum amount of skills...
    else {
      let dialogRef = this.dialog.open(EquipmentPopupComponent, {
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
