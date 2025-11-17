import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { homeOutline, storefrontOutline, peopleOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-users-tabs',
  imports: [IonicModule],
  templateUrl: './users-tabs.html',
  styleUrl: './users-tabs.scss'
})
export class UsersTabs {
  constructor() {
    addIcons({ homeOutline, storefrontOutline, peopleOutline, personCircleOutline, settingsOutline });
  }

}
