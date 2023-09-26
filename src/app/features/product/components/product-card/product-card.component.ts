import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() imgUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() id!: number;
  @Output() onDelete = new EventEmitter();

  constructor(private productService: ProductService) {}

  deleteProduct() {
    this.productService.delete(this.id).subscribe((response) => {
      this.onDelete.emit();
    });
  }
}
