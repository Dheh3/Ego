import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  isDarkModeEnabled: boolean = false;

  constructor() { }
  
  ngOnInit() {
    const darkModePreference = localStorage.getItem('dark-mode');
    this.isDarkModeEnabled = darkModePreference === 'true';
    this.applyDarkMode();
  }


  toggleDarkMode(event: any) {
    this.isDarkModeEnabled = event.detail.checked;
    localStorage.setItem('dark-mode', this.isDarkModeEnabled.toString());
    this.applyDarkMode();
  }

  private applyDarkMode() {
    if (this.isDarkModeEnabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

}
