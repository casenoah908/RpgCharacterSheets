import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { VitalsComponent } from './vitals/vitals.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { SpellsComponent } from './spells/spells.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { RacialTraitsComponent } from './racial-traits/racial-traits.component';
import { ClassTraitsComponent } from './class-traits/class-traits.component';

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
    ClassTraitsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
