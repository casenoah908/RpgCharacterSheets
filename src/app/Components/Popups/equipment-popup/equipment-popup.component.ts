import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Requirements } from '../../../CreationRequirements/Requirements';
import { from } from 'rxjs';

import { Character } from '../../../CharacterGen/Objects/character';

import { Level1PopupComponent } from '../level1-popup/level1-popup.component';
import { Race } from 'src/app/CharacterGen/Objects/race';



@Component({
  selector: 'app-equipment-popup',
  templateUrl: './equipment-popup.component.html',
  styleUrls: ['./equipment-popup.component.css']
})
export class EquipmentPopupComponent implements OnInit {

  requirements: Requirements;
  character: Character;
  raceInfo: Race;

  selectedArmor: string = "placeholder";
  selectedWeapon: string = "placeholder";
  selectedSecondWeapon: string = "placeholder";
  selectedPack: string = "placeholder";
  selectedOther: string = "placeholder";

  //user input flag
  formIncomplete: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<EquipmentPopupComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;
    //clear arrays so they reset each time it opens
    // this.character.clearWeapons();
    // this.character.clearArmors();
    // this.character.clearPacks();
    // this.character.clearOthers();

    this.formIncomplete = false;
  }


  openLevel1Popup() {

    //set choices to "" if there are none
    if(this.requirements.armors.length == 0){
      this.selectedArmor = "";
    }
    if(this.requirements.weapons.length == 0){
      this.selectedWeapon = "";
    }
    if(this.requirements.secondWeapons.length == 0){
      this.selectedSecondWeapon = "";
    }
    if(this.requirements.packs.length == 0){
      this.selectedPack = "";
    }
    if(this.requirements.others.length == 0){
      this.selectedOther = "";
    }

    //check user input
    //if 2 weapons, an armor, or a pack have not been selected...
    if (this.selectedArmor == "placeholder" || this.selectedWeapon == "placeholder" || this.selectedSecondWeapon == "placeholder" || this.selectedPack == "placeholder" || this.selectedOther == "placeholder") {
      this.formIncomplete = true;
    }
    //if an armor, 2 weapons, and a pack have been selected...
    else {
      //assign values
      if(this.selectedArmor != ""){
        this.character.addArmor(this.selectedArmor);
      }
      //set equipped armor to chosen armor
      if(this.selectedArmor != ""){
        this.character.setEquippedArmor(this.selectedArmor);
      }
      if(this.selectedWeapon != ""){
        this.character.addWeapon(this.selectedWeapon);
      }
      if(this.selectedSecondWeapon != ""){
        this.character.addWeapon(this.selectedSecondWeapon);
      }
      if(this.selectedPack != ""){
        this.character.addPack(this.selectedPack);
      }
      if(this.selectedOther != ""){
        this.character.addOthers(this.selectedOther);
      }
      
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

}
