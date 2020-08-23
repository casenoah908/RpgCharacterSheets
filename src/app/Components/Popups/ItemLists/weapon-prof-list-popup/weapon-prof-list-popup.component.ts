import { Component, OnInit, Inject } from '@angular/core';

// Popups
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import { Character } from 'src/app/CharacterGen/Objects/character';

import { GenerationService } from '../../../../CharacterGen/generation.service';
import { Race } from 'src/app/CharacterGen/Objects/race';

@Component({
  selector: 'app-weapon-prof-list-popup',
  templateUrl: './weapon-prof-list-popup.component.html',
  styleUrls: ['./weapon-prof-list-popup.component.css']
})
export class WeaponProfListPopupComponent implements OnInit {

  weaponProfs: Array<string> = ['Simple Weapons', 'Simple Melee Weapons', 'Simple Ranged Weapons', 'Martial Weapons','Martial Melee Weapons','Martial Ranged Weapons',
  'Clubs','Daggers','Greatclubs','Handaxes','Javelins','Light Hammers','Maces','Quarterstaffs','Sickles','Spears',
  'Light Crossbows','Darts','Shortbows','Slings',
  'Battleaxes','Flails','Glaives','Greataxes','Greatswords','Halberds','Lances','Longswords','Mauls','Morning stars','Pikes','Rapiers','Scimitars','Shortswords','Tridents','Warpicks','Warhammers','Whips',
  'Blowguns','Hand Crossbows','Heavy Crossbows','Longbows','Nets'];
  characterInfo: Character;
  raceInfo: Race;
  selectedWeaponProf: string;
  selectedRow: Number;

  constructor(public thisDialogRef: MatDialogRef<WeaponProfListPopupComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    this.characterInfo = this.data.dialogCharacter;
    this.raceInfo = this.data.dialogRace;
  }

  selectWeaponProf(value: string, index: Number){
    this.selectedWeaponProf = value;
    this.selectedRow = index;
  }

  addWeaponProf(){
    this.characterInfo.addWeaponProf(this.selectedWeaponProf.toLowerCase());
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    this.thisDialogRef.close();
  }

}
