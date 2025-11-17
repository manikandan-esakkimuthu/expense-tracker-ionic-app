import { Component } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline, ellipsisHorizontalOutline, arrowDownOutline, arrowUpOutline, createOutline, gridOutline, pencilOutline, personOutline, chevronForwardOutline, shieldOutline, documentTextOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  imports: [IonicModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  constructor(private navCtrl: NavController) {
    addIcons({
      createOutline, gridOutline, pencilOutline, personOutline, chevronForwardOutline
      , shieldOutline, documentTextOutline, logOutOutline, notificationsOutline
    });
  }

  openPage(page: string) {
    console.log('Navigate to', page);
    // this.navCtrl.navigateForward(`/${page}`);
  }

  logout() {
    console.log('Logging out...');
    // You can clear storage here and redirect to login
  }
}