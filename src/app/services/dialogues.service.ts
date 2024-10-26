import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scenes, scenesOption } from '../routes/scenes';

type DialogueKey = keyof typeof scenes

@Injectable({
  providedIn: 'root'
})
export class DialoguesService {

  private currentDialogueSubject = new BehaviorSubject(scenes.start)
  currentDialogue$ = this.currentDialogueSubject.asObservable()
  //private currentDialogue = scenes.start

  constructor() { }

  getDialogue() {
    return this.currentDialogueSubject.value
  }

  chooseOption(option: scenesOption) {
    //this.currentDialogue = scenes[option.next as DialogueKey]
    const nextDialogue = scenes[option.next as DialogueKey]
    if(nextDialogue){
      this.currentDialogueSubject.next(nextDialogue)
    }

  }

  reset() {
    //this.currentDialogue = scenes.start
    this.currentDialogueSubject.next(scenes.start)
  }

}
