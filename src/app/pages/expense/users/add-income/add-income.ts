import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, addOutline } from 'ionicons/icons';
@Component({
  selector: 'app-add-income',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './add-income.html',
  styleUrl: './add-income.scss'
})
export class AddIncome implements OnInit {
  constructor() {
    addIcons({ chevronBackOutline, chevronForwardOutline, addOutline });
  }
  selectedDate: Date = new Date();
  selectedMonth = '';
  selectedYear = '';
  weekDays: Date[] = [];
  incomeTitle = '';
  amount: number | null = null;
  categories = ['Sallary', 'Discount'];
  selectedCategory = 'Sallary';

  ngOnInit() {
    this.updateWeek();
  }

  updateWeek() {
    const today = this.selectedDate;
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay() + 1); // Monday start
    this.weekDays = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
    this.selectedMonth = today.toLocaleString('default', { month: 'long' });
    this.selectedYear = today.getFullYear().toString();
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.updateWeek();
  }

  previousWeek() {
    this.selectedDate.setDate(this.selectedDate.getDate() - 7);
    this.updateWeek();
  }

  nextWeek() {
    this.selectedDate.setDate(this.selectedDate.getDate() + 7);
    this.updateWeek();
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  addCategory() {
    const newCat = prompt('Enter new category name:');
    if (newCat) {
      this.categories.push(newCat);
      this.selectedCategory = newCat;
    }
  }

  saveIncome() {
    console.log('Income Saved:', {
      title: this.incomeTitle,
      amount: this.amount,
      category: this.selectedCategory,
      date: this.selectedDate,
    });
    alert('Income added successfully!');
  }
}