import { Component, OnInit, Inject } from '@angular/core';
import { Requirements } from 'src/app/CreationRequirements/Requirements';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-skills-popup',
  templateUrl: './skills-popup.component.html',
  styleUrls: ['./skills-popup.component.css']
})
export class SkillsPopupComponent implements OnInit {

  // so my "data" is passed through popups, not property binding like cafe-ex-machina
  // so this probably isnt going to work with @Input
  // @Input() data: Requirements;

  requirements: Requirements;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Requirements) { }

  ngOnInit(): void {
    this.requirements = this.data;
  }

}
