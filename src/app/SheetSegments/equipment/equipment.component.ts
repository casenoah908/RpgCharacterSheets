import { Component, OnInit } from '@angular/core';

import { Character } from '../../CharacterGen/Objects/character';
import { Race } from '../../CharacterGen/Objects/race';
import { Armor } from '../../CharacterGen/Assets/Items/armor';
import { ArmorsList } from '../../CharacterGen/Assets/Items/armorsList';

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

  //money
  platinum: number;
  gold: number;
  electrum: number;
  silver: number;
  copper: number;

  //character traits
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;

  equippedArmor: Armor;
  equippedShield: Armor;
  armorList = ArmorsList;

  constructor(public dialog: MatDialog, private generationService: GenerationService) { }

  ngOnInit(): void {
    //obtain character and race info from generation service, passed between router switches
    this.characterInfo = this.generationService.getPassedCharacterInfo();
    this.raceInfo = this.generationService.getPassedRaceInfo();
    this.equippedArmor = this.characterInfo.getEquippedArmor();
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



  //removing
  removeArmor(index: number) {

    //if the removed armor is equipped, set equipped armor/shield to null
    if (this.equippedArmor == this.characterInfo.getArmors()[index]) {
      this.equippedArmor == null;
      this.characterInfo.setEquippedArmor(this.armorList[0]);
      this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    }
    if (this.equippedShield == this.characterInfo.getArmors()[index]) {
      if (this.equippedShield != null) {
        //raise AC by 2 when shield is equipped
        this.characterInfo.setArmorClass(this.characterInfo.getArmorClass() - 2);
      }
      this.equippedShield == null;
    }
    this.characterInfo.getArmors().splice(index, 1);
  }
  removeWeapon(index: number) {
    this.characterInfo.getWeapons().splice(index, 1);
    this.characterInfo.getAttackBonuses().splice(index, 1);
    this.characterInfo.getDamageBonuses().splice(index, 1);
  }
  removePack(index: number) {
    this.characterInfo.getPacks().splice(index, 1);
  }
  removeLanguage(index: number) {
    this.characterInfo.getLanguages().splice(index, 1);
  }
  removeOther(index: number) {
    this.characterInfo.getOthers().splice(index, 1);
  }
  removeArmorProf(index: number) {
    this.characterInfo.getArmorProfs().splice(index, 1);
  }
  removeWeaponProf(index: number) {
    this.characterInfo.getWeaponProfs().splice(index, 1);

    this.generationService.createBonusArrays(this.characterInfo);
    this.generationService.createBonusArrays(this.characterInfo);
  }
  removeToolProf(index: number) {
    this.characterInfo.getToolProfs().splice(index, 1);
  }


  //money updates
  changePlatinum() {
    this.characterInfo.setPlatinum(this.platinum);
  }
  changeGold() {
    this.characterInfo.setGold(this.gold);
  }
  changeElectrum() {
    this.characterInfo.setElectrum(this.electrum);
  }
  changeSilver() {
    this.characterInfo.setSilver(this.silver);
  }
  changeCopper() {
    this.characterInfo.setCopper(this.copper);
  }

  //character traits updates
  changePersonality() {
    this.characterInfo.setPersonalityTraits(this.personality);
  }
  changeIdeals() {
    this.characterInfo.setIdeals(this.ideals);
  }
  changeBonds() {
    this.characterInfo.setBonds(this.bonds);
  }
  changeFlaws() {
    this.characterInfo.setFlaws(this.flaws);
  }



  equipArmor(armor: Armor) {
    //set selected armor for equipped
    //if it's a shield, let it be equipped along with an armor
    if (armor.name.toLowerCase().includes('shield')) {
      if (this.equippedShield == null) {
        //raise AC by 2 when shield is equipped
        this.characterInfo.setArmorClass(this.characterInfo.getArmorClass() + 2);
      }
      this.equippedShield = armor;
    } else {
      this.equippedArmor = armor;
      this.characterInfo.setEquippedArmor(armor);
      this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    }

  }

  unequipArmor(armor: Armor) {
    if (armor.name.toLowerCase().includes('shield')) {
      if (this.equippedShield != null) {
        this.characterInfo.setArmorClass(this.characterInfo.getArmorClass() - 2);
      }
      this.equippedShield = null;
    } else {
      this.equippedArmor = null;
      this.characterInfo.setEquippedArmor(this.armorList[0]);
      this.generationService.finalizeCharacter(this.characterInfo, this.raceInfo);
    }
  }

}
