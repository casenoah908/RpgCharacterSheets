import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

import { MatDialog } from '@angular/material/dialog'
import { GenerationService } from '../../CharacterGen/generation.service';

//components
import { ArmorListPopupComponent } from '../../Components/Popups/ItemLists/armor-list-popup/armor-list-popup.component';
import { ArmorProfListPopupComponent } from '../../Components/Popups/ItemLists/armor-prof-list-popup/armor-prof-list-popup.component';
import { PackListPopupComponent } from '../../Components/Popups/ItemLists/pack-list-popup/pack-list-popup.component';
import { ToolProfListPopupComponent } from '../../Components/Popups/ItemLists/tool-prof-list-popup/tool-prof-list-popup.component';
import { LanguageListPopupComponent } from '../../Components/Popups/ItemLists/language-list-popup/language-list-popup.component';
import { OtherListPopupComponent } from '../../Components/Popups/ItemLists/other-list-popup/other-list-popup.component';
import { WeaponProfListPopupComponent } from '../../Components/Popups/ItemLists/weapon-prof-list-popup/weapon-prof-list-popup.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;

  constructor(public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
  }



  //addition popups
  addArmor() {
    let dialogRef = this.dialog.open(ArmorListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }

  addPack() {
    let dialogRef = this.dialog.open(PackListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }

  addLanguage() {
    let dialogRef = this.dialog.open(LanguageListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }
  addOther() {
    let dialogRef = this.dialog.open(OtherListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }

  addArmorProf() {
    let dialogRef = this.dialog.open(ArmorProfListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }

  addWeaponProf() {
    let dialogRef = this.dialog.open(WeaponProfListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }

  addToolProf() {
    let dialogRef = this.dialog.open(ToolProfListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }


}
