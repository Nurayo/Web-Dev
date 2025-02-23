import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  template: `
    <h2 *ngIf="category">Products in "{{ category }}"</h2>
    <app-product-item 
      *ngFor="let product of getFilteredProducts()" 
      [product]="product"
      (remove)="removeProduct($event)"
      (like)="increaseLikes($event)">
    </app-product-item>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() category!: string;

  products: Product[] = [
    { id: 1, name: 'iPhone 16 Pro', description: 'Latest iPhone model', image: 'iphone.jpg', rating: 5, link: '#', category: 'Smartphones', likes: 0 },
    { id: 2, name: 'MacBook Pro', description: 'Powerful laptop', image: 'macbook.jpg', rating: 5, link: '#', category: 'Laptops', likes: 0 },
    { id: 3, name: 'iPad Pro', description: 'Large-screen tablet', image: 'ipad.jpg', rating: 5, link: '#', category: 'Tablets', likes: 0 },
    { id: 4, name: 'AirPods', description: 'Wireless earbuds', image: 'airpods.jpg', rating: 5, link: '#', category: 'Accessories', likes: 0 }
  ];

  getFilteredProducts(): Product[] {
    return this.products.filter(p => p.category === this.category);
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }

  increaseLikes(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}
