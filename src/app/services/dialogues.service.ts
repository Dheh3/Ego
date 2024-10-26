import { Injectable } from '@angular/core';
import { scenes, scenesOption } from '../routes/scenes';

type DialogueKey = keyof typeof scenes

@Injectable({
  providedIn: 'root'
})
export class DialoguesService {

  private currentDialogue = scenes.start

  constructor() { }

  getDialogue() {
    return this.currentDialogue
  }

  chooseOption(option: scenesOption) {
    this.currentDialogue = scenes[option.next as DialogueKey]

  }

  reset() {
    this.currentDialogue = scenes.start
  }

}
