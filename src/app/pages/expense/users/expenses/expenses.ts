import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { briefcaseOutline, cardOutline, documentTextOutline, fastFoodOutline, logoPaypal, personCircleOutline, pricetagOutline, walletOutline } from 'ionicons/icons';

@Component({
  selector: 'app-expenses',
  imports: [IonicModule, CommonModule],
  templateUrl: './expenses.html',
  styleUrl: './expenses.scss'
})
export class Expenses {
  constructor(private navCtrl: NavController, private router: Router) {
    addIcons({
      walletOutline, cardOutline, logoPaypal, fastFoodOutline, briefcaseOutline, documentTextOutline,
      pricetagOutline, personCircleOutline
    });
  }

  transactions = [
    { title: 'Salary', date: '30 Apr 2022', icon: 'wallet-outline', amount: 35000 },
    { title: 'Maharajan', date: '28 Apr 2022', icon: 'person-circle-outline', amount: 3500 },

    { title: 'Food', date: '25 Apr 2022', icon: 'fast-food-outline', amount: -300 },
    { title: 'Upwork', date: '23 Apr 2022', icon: 'briefcase-outline', amount: 800 },
    { title: 'Bill', date: '22 Apr 2022', icon: 'document-text-outline', amount: -600 },
    { title: 'Discount', date: '20 Apr 2022', icon: 'pricetag-outline', amount: 200 },
  ];

  addIncome() {
    this.router.navigate(['/expense/add-income']);
  }
  addExpense() {
    this.router.navigate(['/expense/add-expense']);
  }
}
