import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Requirements } from '../../CreationRequirements/Requirements';
import { from } from 'rxjs';

import { Character } from '../../CharacterGen/character';

import { Level1PopupComponent } from '../level1-popup/level1-popup.component';
import { Race } from 'src/app/CharacterGen/race';



@Component({
  selector: 'app-equipment-popup',
  templateUrl: './equipment-popup.component.html',
  styleUrls: ['./equipment-popup.component.css']
})
export class EquipmentPopupComponent implements OnInit {

  requirements: Requirements;
  character: Character;
  raceInfo: Race;

  selectedArmor: string ="";
  selectedWeapon: string="";
  selectedSecondWeapon: string="";
  selectedPack: string="";

  constructor(@Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<EquipmentPopupComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;
    //clear arrays so they reset each time it opens
    this.character.clearWeapons();
    this.character.clearArmors();
    this.character.clearPacks();
  }


  openLevel1Popup(){

    //assign values
    this.character.addArmor(this.selectedArmor);
    //set equipped armor to chosen armor
    this.character.setEquippedArmor(this.selectedArmor);
    this.character.addWeapon(this.selectedWeapon);
    this.character.addWeapon(this.selectedSecondWeapon);
    this.character.addPack(this.selectedPack);

    let dialogRef = this.dialog.open(Level1PopupComponent, {
      // size of popup
      width: '800px',
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
