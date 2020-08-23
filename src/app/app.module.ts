import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//character and race
import { Character } from './CharacterGen/Objects/character';
import { Race } from './CharacterGen/Objects/race';

import 'hammerjs';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './SheetSegments/header/header.component';
import { SkillsComponent } from './SheetSegments/skills/skills.component';
import { VitalsComponent } from './SheetSegments/vitals/vitals.component';
import { WeaponsComponent } from './SheetSegments/weapons/weapons.component';
import { SpellsComponent } from './SheetSegments/spells/spells.component';
import { EquipmentComponent } from './SheetSegments/equipment/equipment.component';
import { RacialTraitsComponent } from './SheetSegments/racial-traits/racial-traits.component';
import { ClassTraitsComponent } from './SheetSegments/class-traits/class-traits.component';
import { CharacterSheetComponent } from './Components/character-sheet/character-sheet.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ClassRacePopupComponent } from './Components/Popups/class-race-popup/class-race-popup.component';
import { SkillsPopupComponent } from './Components/Popups/skills-popup/skills-popup.component';
import { EquipmentPopupComponent } from './Components/Popups/equipment-popup/equipment-popup.component';
import { Level1PopupComponent } from './Components/Popups/level1-popup/level1-popup.component';
import { StatsPopupComponent } from './Components/Popups/stats-popup/stats-popup.component';
import { BackgroundSkillsComponent } from './Components/Popups/background-skills/background-skills.component';

//popups
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeaponListPopupComponent } from './Components/Popups/ItemLists/weapon-list-popup/weapon-list-popup.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LanguageListPopupComponent } from './Components/Popups/ItemLists/language-list-popup/language-list-popup.component';
import { PackListPopupComponent } from './Components/Popups/ItemLists/pack-list-popup/pack-list-popup.component';
import { ArmorListPopupComponent } from './Components/Popups/ItemLists/armor-list-popup/armor-list-popup.component';
import { OtherListPopupComponent } from './Components/Popups/ItemLists/other-list-popup/other-list-popup.component';
import { ArmorProfListPopupComponent } from './Components/Popups/ItemLists/armor-prof-list-popup/armor-prof-list-popup.component';
import { WeaponProfListPopupComponent } from './Components/Popups/ItemLists/weapon-prof-list-popup/weapon-prof-list-popup.component';
import { ToolProfListPopupComponent } from './Components/Popups/ItemLists/tool-prof-list-popup/tool-prof-list-popup.component';
import { LevelUpPopupComponent } from './Components/Popups/LevelUps/level-up-popup/level-up-popup.component';
import { SpellsPopupComponent } from './Components/Popups/ItemLists/spells-popup/spells-popup.component';
import { SpellDetailPopupComponent } from './Components/Popups/ItemLists/spell-detail-popup/spell-detail-popup.component';
import { LoginComponent } from './Components/login/login.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    VitalsComponent,
    WeaponsComponent,
    SpellsComponent,
    EquipmentComponent,
    RacialTraitsComponent,
    ClassTraitsComponent,
    CharacterSheetComponent,
    HomePageComponent,
    ClassRacePopupComponent,
    SkillsPopupComponent,
    EquipmentPopupComponent,
    Level1PopupComponent,
    StatsPopupComponent,
    BackgroundSkillsComponent,
    WeaponListPopupComponent,
    LanguageListPopupComponent,
    PackListPopupComponent,
    ArmorListPopupComponent,
    OtherListPopupComponent,
    ArmorProfListPopupComponent,
    WeaponProfListPopupComponent,
    ToolProfListPopupComponent,
    LevelUpPopupComponent,
    SpellsPopupComponent,
    SpellDetailPopupComponent,
    LoginComponent,
    CreateAccountComponent,

  ],
  entryComponents: [ClassRacePopupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'userHome', component: HomePageComponent},
      { path: 'createAccount', component: CreateAccountComponent},
      { path: 'sheet', component: CharacterSheetComponent}
    ]),
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
