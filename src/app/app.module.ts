import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
import { PopupComponent } from './popup/popup.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { HomePageComponent } from './home-page/home-page.component';

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
    PopupComponent,
    CharacterSheetComponent,
    HomePageComponent,

  ],
  entryComponents: [PopupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
