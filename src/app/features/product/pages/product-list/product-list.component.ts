import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { GetAllProductsModel } from '../../models/getAllProductsModel';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // Database DEMOSU
  productList: GetAllProductsModel[] = [];

  constructor(
    private productService: ProductService,
    private titleService: Title,
    private metaService: Meta
  ) {
    titleService.setTitle('Etiya - Ürün Listesi');
    metaService.addTag({
      name: 'keywords',
      content: 'ürünler,ürün listesi,e-ticaret',
    });
  }

  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productService
      .getAll()
      .subscribe((response: GetAllProductsModel[]) => {
        this.productList = response;
      });
  }
}
