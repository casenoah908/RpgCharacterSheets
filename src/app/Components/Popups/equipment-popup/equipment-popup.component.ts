import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Requirements } from '../../../CreationRequirements/Requirements';


import { Character } from '../../../CharacterGen/Objects/character';

import { GenerationService } from '../../../CharacterGen/generation.service';

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


  constructor(@Inject(MAT_DIALOG_DATA) public data, public thisDialogRef: MatDialogRef<EquipmentPopupComponent>, public dialog: MatDialog, public generationService: GenerationService) { }

  ngOnInit(): void {
    this.requirements = this.data.dialogRequirements;
    this.character = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRaceInfo;

    this.formIncomplete = false;

  }


  openLevel1Popup() {

    //set choices to "" if there are none
    if (this.requirements.armors.length == 0) {
      this.selectedArmor = "";
    }
    if (this.requirements.weapons.length == 0) {
      this.selectedWeapon = "";
    }
    if (this.requirements.secondWeapons.length == 0) {
      this.selectedSecondWeapon = "";
    }
    if (this.requirements.packs.length == 0) {
      this.selectedPack = "";
    }
    if (this.requirements.others.length == 0) {
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
      if (this.selectedArmor != "") {
        //seperate string in case of multiple items
        //Go to lowercase, remove any instances of "one", split selections at " and "
        var splitString = this.selectedArmor.toLowerCase().replace(/one /g, '').replace(/ : if proficient/g,'').split(" and ");
        //pass to generation service to match selections to hardcoded equipment items and then add to character.
        this.generationService.addEquipment(splitString, this.character);
      }

      //equipped armor set in addEquipment

      if (this.selectedWeapon != "") {

          //seperate string in case of multiple items
          //Go to lowercase, remove any instances of "one", split selections at " and "
          var splitString = this.selectedWeapon.toLowerCase().replace(/one /g, '').replace(/ : if proficient/g,'').split(" and ");
          for(let i=0; i<splitString.length; i++){
            if (splitString[i].includes('martial')) {
              this.character.addWeapon({name: splitString[i], classification: '', price: '0', damageType: '', damageDie: [0], weight: 0, bonusType: [''], properties: [''] });
            }
            if (splitString[i].includes('simple')) {
              this.character.addWeapon({name: splitString[i], classification: '', price: '0', damageType: '', damageDie: [0], weight: 0, bonusType: [''], properties: [''] });
            }
          }
          //pass to generation service to match selections to hardcoded equipment items and then add to character.
          this.generationService.addEquipment(splitString, this.character);
        
      }
      if (this.selectedSecondWeapon != "") {

          //seperate string in case of multiple items
          //Go to lowercase, remove any instances of "one", split selections at " and "
          var splitString = this.selectedSecondWeapon.toLowerCase().replace(/one /g, '').replace(/ : if proficient/g,'').split(" and ");
          for(let i=0; i<splitString.length; i++){
            if (splitString[i].includes('simple weapon')) {
              this.character.addWeapon({name: splitString[i], classification: '', price: '0', damageType: '', damageDie: [0], weight: 0, bonusType: [''], properties: [''] });
            }
            if (splitString[i].includes('martial weapon')) {
              this.character.addWeapon({name: splitString[i], classification: '', price: '0', damageType: '', damageDie: [0], weight: 0, bonusType: [''], properties: [''] });
            }
          }
          //pass to generation service to match selections to hardcoded equipment items and then add to character.
          this.generationService.addEquipment(splitString, this.character);
        
      }


      if (this.selectedPack != "") {
        this.character.addPack(this.selectedPack); //packs never include multiple items
      }
      if (this.selectedOther != "") {
        this.character.addOthers(this.selectedOther); //others never include multiple items
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
