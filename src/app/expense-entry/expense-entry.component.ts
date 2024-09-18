import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from './expense-entry'; // Importación de la interfaz

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  title: string = ''; 
expenseEntries: ExpenseEntry[] = []; 


  constructor() { }

  ngOnInit(): void {
    this.title = "Expense Entry List";
    this.expenseEntries = this.getExpenseEntries(); 
  }

  getExpenseEntries() : ExpenseEntry[] { 
    let mockExpenseEntries : ExpenseEntry[] = [ 
      { id: 1, 
         item: "Pizza", 
         amount: Math.floor((Math.random() * 10) + 1), 
         category: "Food", 
         location: "Mcdonald", 
         spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
         createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
      { id: 1, 
         item: "Pizza", 
         amount: Math.floor((Math.random() * 10) + 1), 
         category: "Food", 
         location: "KFC", 
         spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
         createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
      { id: 1,
        item: "Pizza",
        amount: Math.floor((Math.random() * 10) + 1), 
        category: "Food", 
        location: "Mcdonald", 
        spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
        createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
      { id: 1, 
         item: "Pizza", 
         amount: Math.floor((Math.random() * 10) + 1), 
         category: "Food", 
         location: "KFC", 
         spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
         createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
      { id: 1, 
         item: "Pizza", 
         amount: Math.floor((Math.random() * 10) + 1), 
         category: "Food", 
         location: "KFC", 
         spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
         createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) 
      }, 
    ]   
    return mockExpenseEntries; 
  }
}
