import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(
    private snackbar: MatSnackBar,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.getProducts(); //  get products
  }

  /**
   * function to fetch products from api
   */
  getProducts() {
    this.productService.getAllProducts()
      .then((products: Product[]) => {
        this.products = products;
      })
      .catch(err => {
        console.log('ERROR:', err);
        this.snackbar.open('ERROE: Fetching products', 'Error', { duration: 1000 });
      });
  }

}
