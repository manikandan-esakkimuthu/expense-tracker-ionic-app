import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { lockClosedOutline, logoFacebook, logoInstagram, logoWhatsapp, personOutline } from 'ionicons/icons';
@Component({
  selector: 'app-my-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './my-login.html',
  styleUrls: ['./my-login.scss'],
})
export class MyLogin {
  username = '';
  password = '';

  constructor(private router: Router) {
    addIcons({ logoFacebook, logoInstagram, logoWhatsapp, lockClosedOutline, personOutline })
  }

  login() {
    if (!this.username || !this.password) {
      alert('Please enter username and password');
      return;
    }
    if (this.username === 'admin') {
      // Dummy admin redirect (update later)
      this.router.navigate(['/admin']);
      return;
    } else if (this.username === 'employee') {
      // Dummy employee redirect (update later)
      this.router.navigate(['/employee']);
      return;
    } else if (this.username === 'user') {
      // Dummy user redirect (update later)
      this.router.navigate(['/user']);
      return;
    }
    else if (this.username === 'expense') {
      // Dummy user redirect (update later)
      this.router.navigate(['/expense']);
      return;
    }

    // Dummy role redirect (update later)
    // this.router.navigate(['/user']);
  }

  loginWith(provider: string) {
    console.log('Social login with:', provider);
  }
}
