import { Component, OnInit } from '@angular/core';

// popup
import {MatDialog} from '@angular/material/dialog'
import { ClassRacePopupComponent } from '../Popups/class-race-popup/class-race-popup.component';

import { DatabaseService } from '../../database.service';
import { User } from 'src/app/User';
import { Character } from '../../CharacterGen/Objects/character';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dialogResult = "";
  user: User;

  allCharacters: Character[];
  characters: Character[];
  characterCount: number = 5;

  constructor( public dialog: MatDialog, private dataService: DatabaseService) { }

  ngOnInit(): void {
    this.user = this.dataService.getUserInfo();
    this.fetchData();
    //push all characters into characters[] where user.id matches character userId
    for(let i=0; i<this.characterCount; i++){
      if(this.allCharacters[i].getUser() == this.user.id){
        this.characters.push(this.allCharacters[i]);
      }
    }
  }

  fetchData(){
    this.dataService.getCharacters().subscribe(data =>{
      this.allCharacters = data; //all characters are empty?
      // this.characterCount = this.allCharacters.length;
    })
  }


  openDialog(): void{
    let dialogRef = this.dialog.open(ClassRacePopupComponent, {
      width: '600px',
      data: {
        dialogUser: this.user,
      }
    });

      
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed: ${result}');
      this.dialogResult = result;
    })
  }

  

}
