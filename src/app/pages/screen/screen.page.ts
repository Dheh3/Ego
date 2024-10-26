import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {

  characterName: string = '';

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.displayEgo()
  }

  displayEgo() {
    this.characterName = this.gameService.getCharacterName()
    //this.getEgo.getCharacterName
  }

}
