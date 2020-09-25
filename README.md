# WebLink
Hi! Use the following link to view this webpage!

  https://casenoah908.github.io/RpgCharacterSheets/

# RpgCharacterSheets
  This Project is my proudest work to date. While many of my other repositories were small scale group projects, some of them done for school, this one was all me. If you are looking for a representation of what I can accomplish alone (and not for a school project), this is the best spot to look. In the summer before my Junior year, I decided to take a month to work on my own solo project. Having just came out of Advanced Software Development, I had a rough idea of how to make my own website using the Angular framework. I decided to base my project on a personal hobby and spent a month building a Pen & Paper Role Playing Game Character Creator website compatible with Dungeons & Dragons (D&D), and more importantly, one that walked you through the steps of the many, many, (many) choices that are involved with creating a character. While I have certainly noticed and used several D&D character sheet apps, I've never seen one that didn't already assume you knew what you were choosing. While I still have a long way to go with this project to make it beginner friendly, my central goal for this webapp is to be a tutorial of sorts for those who have never played D&D. As someone who's tried to teach 6-8 people how to make a character at once before, It's not the easiest thing in the world. 
  
  Speaking as someone who loves the game, if there's one flaw with D&D it's that it has too many numbers. In terms of a webapp, this means there's a lot of data that needs to be chosen by the user, which in turn determines the value of other data behind the scenes, and then it all needs to get passed to a single webpage that holds the "character sheet," or the full list of details of the entire character. Even more, there is a lot of pre determined data that the user doesn't have to know about until they are choosing from a list of selections. A user may choose to be an Elf Ranger (archer), and those choices will determine what kind of weapons they get to choose from to start a game with. Since these choices are constant but depend on a specific role chosen by the user, the program contains a lot of hardcoded data for these choices. This includes choices depending on the character race (ex: Elf) or the character class (ex: Ranger), as well as lists of weapon objects, armor objects, spell objects (of which I haven't made a dent into how many exist in the game). If there is one big flaw to my project, it is the sheer amount of hardcoded data it relies on, as well as how messy its organization is in its current state. 
 
 Finally, there are many additional features I would love to add to this project once I should have the time to return to it. This includes:<br/><br/>
    1. Users could sign into a player account to access previously created characters later.<br/>
    2. Users could sign into a Game Master (someone who runs a game of D&D rather than play it) account and create a "party," that would contain characters created by other              player users.<br/>
    3. Player users could level up their character to give them new abilities<br/>
    4. Character sheets would display Class (character role) related abilities in greater detail<br/>
    5. All spells (200-300) would be added<br/>
    6. Build the websited with a more responsive design. It looks great on my screen, but you can't even struggle through creation on a phone.<br/>
    7. Should I ever gain some skill in digital art, I would love to add animated dice to roll for both character creation and playing the game. D&D players are very particular          about their dice, and many (including me) would never trust a machine to determine their character's strength score.<br/>
    8. Should I gain even more skill in digital art, I would love to add a visual character creator, where a user's choices in creation (like race,armor,etc.) would result in a          character portrait based on those choices. (or if i'm really dreaming, I would provide multiple choices directly to the user themselves, even for things like                    hairstyle).<br/><br/>
    
  Overall, I'm proud of the work I acheived when I set out to accomplish my own passion project. I chose to make a D&D character creator not just because it would be interesting to me, but also because I knew there were going to be a lot of challenges to making it that I did not have the previous knowledge of how to solve. I also knew that there would be endless features to continue adding to it, and that I would never reach a "finished" state. I hope that my dedication to this website can show the kind of effort I am willing to put forth working for you, and that I will always be looking for ways to stretch my limits. Remember to follow the link at the top of this document to check out the website for yourself and create your own character!



<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

# Technical Mumbo Jumbo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
