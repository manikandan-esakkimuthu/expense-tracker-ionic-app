import { AfterViewInit, Component } from '@angular/core';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend
);


import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  gridOutline,
  notificationsOutline,
  ellipsisHorizontalOutline,
  arrowDownOutline,
  arrowUpOutline,
  briefcaseOutline,
  cardOutline,
  documentTextOutline,
  fastFoodOutline,
  logoPaypal,
  personCircleOutline,
  pricetagOutline,
  walletOutline,
  sparklesOutline,
  bagHandleOutline
} from 'ionicons/icons';

// Register required chart components
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

@Component({
  selector: 'app-reports',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class Reports implements AfterViewInit {

  constructor() {
    addIcons({
      gridOutline,
      notificationsOutline,
      ellipsisHorizontalOutline,
      arrowDownOutline,
      arrowUpOutline, walletOutline, cardOutline, logoPaypal, fastFoodOutline, briefcaseOutline, documentTextOutline,
      pricetagOutline, personCircleOutline, sparklesOutline, bagHandleOutline
    });
  }

  activeTab: 'income' | 'expense' = 'income';
  selectedFilter = 'monthly';
  chart: any;

  ngAfterViewInit() {
    this.renderChart();
  }
  incomeTransactions = [
    { title: 'Salary', date: '01 May 2022', icon: 'wallet-outline', amount: 8500 },
    { title: 'Upwork', date: '28 Apr 2022', icon: 'briefcase-outline', amount: 2300 },
    { title: 'Bonus', date: '25 Apr 2022', icon: 'sparkles-outline', amount: 1200 }
  ];

  expenseTransactions = [
    { title: 'Shopping', date: '30 Apr 2022', icon: 'bag-handle-outline', amount: -1550 },
    { title: 'Food', date: '25 Apr 2022', icon: 'fast-food-outline', amount: -300 },
    { title: 'Bills', date: '22 Apr 2022', icon: 'document-text-outline', amount: -600 }
  ];

  renderChart() {
    const ctx = document.getElementById('overviewChart') as HTMLCanvasElement;

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Income',
            data: [2500, 1300, 2000, 2300],
            backgroundColor: '#8a2be2',
            borderRadius: 8,
            barThickness: 25,
          },
          {
            label: 'Expense',
            data: [1500, 1000, 1200, 1300],
            backgroundColor: '#ff5252',
            borderRadius: 8,
            barThickness: 25,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
            grid: { color: '#eee' },
            ticks: {
              callback: (value) => '₹' + value, // INR
            },
          },
        },
      },
    });
  }

  setActive(tab: 'income' | 'expense') {
    this.activeTab = tab;
  }
  get activeList() {
    return this.activeTab === 'income'
      ? this.incomeTransactions
      : this.expenseTransactions;
  }
}
