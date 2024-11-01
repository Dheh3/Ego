import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  isLoaded: boolean = false

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.lighten()
  }

  redirect() {
    this.darken()
    setTimeout(() => {
      this.navCtrl.navigateRoot('/screen')
    }, 5000);
  }

  lighten() {
    const load = document.querySelector(".load") as HTMLElement;
    load.style.opacity = "0";
    setTimeout(() => {
      load.style.opacity = "1";
      this.isLoaded = true
    }, 5000);
  }

  continue() {
    if (this.isLoaded === true) {
      this.redirect()
    } else {
      return
    }
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
