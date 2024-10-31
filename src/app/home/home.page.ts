import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private navCtrl: NavController) { }


  redirect(path: string) {

    const overlay = document.querySelector(".overlay") as HTMLElement;

    overlay.style.display = "block";
    overlay.style.opacity = "1";

    setTimeout(() => {
      //this.router.navigate([path]);
      //this.router.navigate([path],{replaceUrl: true})
      this.navCtrl.navigateRoot([path])
      //window.location.href = '/screen'



      overlay.style.opacity = "0";

      setTimeout(() => {
        overlay.style.display = "none";
        overlay.style.opacity = "0";
      }, 1000);
    }, 1000);

  }


}
