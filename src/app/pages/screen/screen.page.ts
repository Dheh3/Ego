import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { DialoguesService } from 'src/app/services/dialogues.service';
//import { scenesOption } from 'src/app/routes/scenes';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {

  characterName: string = '';
  dialogue: any;

  constructor(
    private gameService: GameService,
    private dialoguesService: DialoguesService
  ) { }

  ngOnInit() {
    this.displayEgo()
    //this.dialogue = this.dialoguesService.getDialogue()
    this.dialoguesService.currentDialogue$.subscribe(dialogue => {
      this.dialogue = dialogue
    })
  }

  displayEgo() {
    this.characterName = this.gameService.getCharacterName()
  }
  

  /* chooseOption(option: scenesOption){
    this.dialoguesService.chooseOption(option)
    this.dialogue = this.dialoguesService.getDialogue()
  }

  resetDialogue(){
    this.dialoguesService.reset()
    this.dialogue = this.dialoguesService.getDialogue()
  } */

}
