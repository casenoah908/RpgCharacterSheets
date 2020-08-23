import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './User';
import { Character } from './CharacterGen/Objects/character';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private rpgUrl = 'https://rpgcharactersheets-5c7f3.firebaseio.com/';

  userInfo: User;
  characterInfo: Character;

  constructor( private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.rpgUrl + 'user.json')
    .pipe(map(responseData => {
      console.log(responseData);
      const userArray: User[] = [];
      for(const key in responseData){
        userArray.push(responseData[key]);
      }
      return userArray;
    }));
  }

  // //not gonna work
  // getUser(id: number): Observable<User> {
  //   const url = '${this.usersUrl}/${id}' + 'user.json';
    
  //   return this.http.get<User>(url);
  // }

  addUser(user: User): Observable<User> {
    console.log(user.id);
    return this.http.post<User>(this.rpgUrl + 'user.json', user);
  }

  //hold character and race info for passing between routers
  holdInfo(user: User) {
    this.userInfo = user;
  };

  getUserInfo(){
    return this.userInfo;
  }





  //look at updateHero for character updating
  getCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(this.rpgUrl + 'character.json')
    .pipe(map(responseData => {
      console.log(responseData);
      const characterArray: Character[] = [];
      for(const key in responseData){
        characterArray.push(responseData[key]);
      }
      return characterArray;
    }));
  }

  addCharacter(character: Character): Observable<Character> {
    console.log("addCharacter reached");
    console.log(character.getName());
    return this.http.post<Character>(this.rpgUrl + 'character.json', character);
  }

  holdCharacterInfo(character: Character) {
    this.characterInfo = character;
  };

  getCharacterInfo(){
    return this.characterInfo;
  }


}
