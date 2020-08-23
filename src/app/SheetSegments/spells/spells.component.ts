import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';
import { Spell } from '../../CharacterGen/Assets/Spells/Spell';

import { MatDialog } from '@angular/material/dialog'

import { GenerationService } from '../../CharacterGen/generation.service';

import { SpellsPopupComponent } from '../../Components/Popups/ItemLists/spells-popup/spells-popup.component';
import { SpellDetailPopupComponent } from '../../Components/Popups/ItemLists/spell-detail-popup/spell-detail-popup.component';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  characterInfo: Character;
  raceInfo: Race;
  spells: Spell[][];

  //slots
  slots1: number = 0;
  slots2: number = 0;
  slots3: number = 0;
  slots4: number = 0;
  slots5: number = 0;
  slots6: number = 0;
  slots7: number = 0;
  slots8: number = 0;
  slots9: number = 0;

  constructor(public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
    this.spells = this.characterInfo.getSpells();
  }

  addSpell(spellLevel: number){
    let dialogRef = this.dialog.open(SpellsPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogCharacter: this.characterInfo,
        dialogRace: this.raceInfo,
        dialogSpellLevel: spellLevel
      }
    });
  }

  openSpellDetail(spell: Spell){
    let dialogRef = this.dialog.open(SpellDetailPopupComponent, {
      // size of popup
      width: '800px',
      // data that gets passed to popup (requirements object)
      data: {
        dialogSpell: spell
      }
    });
  }

  changeSlots1(){
    this.characterInfo.setSlots1(this.slots1);
  }
  changeSlots2(){
    this.characterInfo.setSlots2(this.slots2);
  }
  changeSlots3(){
    this.characterInfo.setSlots3(this.slots3);
  }
  changeSlots4(){
    this.characterInfo.setSlots4(this.slots4);
  }
  changeSlots5(){
    this.characterInfo.setSlots5(this.slots5);
  }
  changeSlots6(){
    this.characterInfo.setSlots6(this.slots6);
  }
  changeSlots7(){
    this.characterInfo.setSlots7(this.slots7);
  }
  changeSlots8(){
    this.characterInfo.setSlots8(this.slots8);
  }
  changeSlots9(){
    this.characterInfo.setSlots9(this.slots9);
  }

}
