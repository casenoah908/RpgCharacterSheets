import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
      { path: '', component: HomePageComponent},
      { path: 'sheet', component: CharacterSheetComponent}
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
