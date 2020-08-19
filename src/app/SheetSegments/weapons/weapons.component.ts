import { Component, OnInit, Inject } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';

import { GenerationService } from '../../CharacterGen/generation.service';

import { Weapon } from '../../CharacterGen/Assets/Items/weapon';

// Popups
import { MatDialog } from '@angular/material/dialog'
import { WeaponListPopupComponent } from 'src/app/Components/Popups/ItemLists/weapon-list-popup/weapon-list-popup.component';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;

  //weapon bonus vars
  profBonuses: Array<number> = [];
  statBonuses: Array<number> = [];
  attackBonuses: Array<number> = [];


  constructor(public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();

  }

  equipWeapon(){
    let dialogRef = this.dialog.open(WeaponListPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo
      }
    });
  }

  removeWeapon(index: number){
    this.characterInfo.getWeapons().splice(index,1);
    this.characterInfo.getAttackBonuses().splice(index,1);
    this.characterInfo.getDamageBonuses().splice(index,1);
  }


}
