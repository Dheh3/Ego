import { Component, OnInit } from '@angular/core';
import { DialoguesService } from 'src/app/services/dialogues.service';
import { scenesOption } from 'src/app/routes/scenes';

import { NavController } from '@ionic/angular';

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
    private dialoguesService: DialoguesService,
    private navCtrl: NavController
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


  redirect() {
    this.darken()
    setTimeout(() => {
      this.navCtrl.navigateRoot('/home')
    }, 5000);
  }


  darken() {
    const overlay = document.querySelector(".darker") as HTMLElement;
    overlay.style.display = "block";
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.opacity = "1";
      setTimeout(() => {
        overlay.style.display = "none";
        overlay.style.opacity = "0";
      }, 10000);

    }, 1000);
  }

}
