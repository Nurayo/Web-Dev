import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>⭐ Rating: {{ product.rating }}</p>
      <p>❤️ Likes: {{ product.likes }}</p>
      <button (click)="like()">Like</button>
      <button (click)="remove()">Remove</button>
    </div>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  removeProduct() {
    this.remove.emit(this.product.id);
  }

  likeProduct() {
    this.like.emit(this.product.id);
  }
}
