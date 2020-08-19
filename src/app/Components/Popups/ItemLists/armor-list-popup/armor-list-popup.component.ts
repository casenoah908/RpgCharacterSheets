import { Component, OnInit, Inject } from '@angular/core';

import { Armor } from '../../../../CharacterGen/Assets/Items/armor';
import { ArmorsList } from '../../../../CharacterGen/Assets/Items/armorsList'

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';


@Component({
  selector: 'app-armor-list-popup',
  templateUrl: './armor-list-popup.component.html',
  styleUrls: ['./armor-list-popup.component.css']
})
export class ArmorListPopupComponent implements OnInit {

  armorList: Array<Armor> = ArmorsList;
  characterInfo: Character;
  raceInfo: Race;
  selectedArmor: Armor;
  selectedLightRow: Number;
  selectedMediumRow: Number;
  selectedHeavyRow: Number;
  selectedOtherRow: Number;

  constructor(public thisDialogRef: MatDialogRef<ArmorListPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
  }

  selectLightArmor(value: Armor, index: Number){
    this.selectedArmor = value;
    this.selectedLightRow = index;
    this.selectedMediumRow = null;
    this.selectedHeavyRow = null;
    this.selectedOtherRow = null;
  }
  selectMediumArmor(value: Armor, index: Number){
    this.selectedArmor = value;
    this.selectedLightRow = null;
    this.selectedMediumRow = index;
    this.selectedHeavyRow = null;
    this.selectedOtherRow = null;
  }
  selectHeavyArmor(value: Armor, index: Number){
    this.selectedArmor = value;
    this.selectedLightRow = null;
    this.selectedMediumRow = null;
    this.selectedHeavyRow = index;
    this.selectedOtherRow = null;
  }
  selectShieldArmor(value: Armor, index: Number){
    this.selectedArmor = value;
    this.selectedLightRow = null;
    this.selectedMediumRow = null;
    this.selectedHeavyRow = null;
    this.selectedOtherRow = index;
  }

  addArmor(){
    this.characterInfo.addArmor(this.selectedArmor);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }
}
