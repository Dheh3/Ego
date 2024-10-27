import { Component, OnInit } from '@angular/core';
import { DialoguesService } from 'src/app/services/dialogues.service';
import { scenesOption } from 'src/app/routes/scenes';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.scss'],
})
export class SubtitlesComponent  implements OnInit {

  color = 'dark' 
  dialogue: any;
  showFullText = false

  constructor(
    private dialoguesService: DialoguesService
  ) { }

  ngOnInit() {
    //this.dialogue = this.dialoguesService.getDialogue()
    this.dialoguesService.currentDialogue$.subscribe( dialogue => {
      this.dialogue = dialogue
    })
  }

  chooseOption(option: scenesOption){
    this.dialoguesService.chooseOption(option)
    //this.dialogue = this.dialoguesService.getDialogue()
  }

  resetDialogue(){
    this.dialoguesService.reset()
    //this.dialogue = this.dialoguesService.getDialogue()
  }

}
