import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.applySavedTheme()
  }


  private applySavedTheme() {
    const darkModePreference = localStorage.getItem('dark-mode');
    const isDarkModeEnabled = darkModePreference === 'true';
    document.body.classList.toggle('dark', isDarkModeEnabled);
  }
}
