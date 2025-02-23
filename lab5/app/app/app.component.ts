import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Online Store</h1>
    <h3>Select a category:</h3>
    <div *ngFor="let category of categories">
      <button (click)="selectCategory(category)">{{ category }}</button>
    </div>
    <app-product-list [category]="selectedCategory"></app-product-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Smartphones', 'Laptops', 'Tablets', 'Accessories'];
  selectedCategory: string = '';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
