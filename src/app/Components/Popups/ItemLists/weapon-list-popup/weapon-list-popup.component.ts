import { Component, OnInit, Inject } from '@angular/core';

import { Weapon } from '../../../../CharacterGen/Assets/Items/weapon';
import { WeaponsList } from '../../../../CharacterGen/Assets/Items/weaponsList'

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-weapon-list-popup',
  templateUrl: './weapon-list-popup.component.html',
  styleUrls: ['./weapon-list-popup.component.css']
})
export class WeaponListPopupComponent implements OnInit {

  weaponList: Array<Weapon> = WeaponsList;
  characterInfo: Character;
  raceInfo: Race;
  selectedWeapon: Weapon;
  selectedSimpleRow: Number;
  selectedMartialRow: Number;

  constructor(public thisDialogRef: MatDialogRef<WeaponListPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
  }

  selectSimpleWeapon(weapon: Weapon, index: Number){
    this.selectedWeapon = weapon;
    this.selectedSimpleRow = index;
    this.selectedMartialRow = null;
  }
  selectMartialWeapon(weapon: Weapon, index: Number){
    this.selectedWeapon = weapon;
    this.selectedMartialRow = index;
    this.selectedSimpleRow = null;
  }

  equipWeapon(){
    this.characterInfo.addWeapon(this.selectedWeapon);
    this.generationService.createBonusArrays(this.characterInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }

  



}
