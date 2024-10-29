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
    this.isDarkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    document.body.classList.toggle('dark', this.isDarkModeEnabled);
  }

  toggleDarkMode(event: any) {
    this.isDarkModeEnabled = event.detail.checked;

    // Adiciona ou remove a classe `dark` do body
    document.body.classList.toggle('dark', this.isDarkModeEnabled);

    // Salva a preferência no localStorage
    localStorage.setItem('dark-mode', this.isDarkModeEnabled.toString());
  }

}
