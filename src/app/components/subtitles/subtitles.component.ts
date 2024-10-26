import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.scss'],
})
export class SubtitlesComponent  implements OnInit {

  black = 'dark'
  red = 'danger'

  constructor() { }

  ngOnInit() {}

}
