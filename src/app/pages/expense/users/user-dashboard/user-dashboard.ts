import { Component } from '@angular/core';

import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { homeOutline, storefrontOutline, peopleOutline, personCircleOutline, settingsOutline, menuOutline, notificationsOutline, ellipsisHorizontalOutline, arrowDownOutline, arrowUpOutline, gridOutline, arrowUpCircleOutline, arrowDownCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-user-dashboard',
  imports: [CommonModule, CurrencyPipe, IonicModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.scss'
})
export class UserDashboard {

  constructor() {
    addIcons({
      gridOutline, notificationsOutline, ellipsisHorizontalOutline, arrowDownOutline, arrowUpOutline,
      arrowUpCircleOutline, arrowDownCircleOutline
    });
  }
  transactions = [
    {
      title: 'Salary',
      time: 'Today',
      amount: 2350,
      icon: 'assets/icons/income.png',
      ionIcon: 'arrow-up-circle-outline'
    },
    {
      title: 'Shopping',
      time: 'Yesterday',
      amount: -120,
      icon: 'assets/icons/expense.png',
      ionIcon: 'arrow-down-circle-outline'
    },
    {
      title: 'Groceries',
      time: '2 days ago',
      amount: -80,
      icon: 'assets/icons/expense2.png',
      ionIcon: 'arrow-down-circle-outline'
    }
  ];

}
