import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { CategoryService } from '../services/category.service';
import { ProductsService } from '../services/products.service';

import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  categories: Category[];
  products: Product[];
  categoryProducts = new Array<any>();

  constructor(
    private categoryService: CategoryService,
    private productService: ProductsService,

  ) { }

  ngOnInit() {
    this.getCategories();
  }

  /**
   * function to fetch all the categories
   */
  getCategories() {
    this.categoryService.getAllCategories()
      .then((categories: Category[]) => {
        this.categories = categories;
        this.getProducts();
      })
      .catch(err => {
        console.log('FETCH ERR:', err);
        // this.snackbar.open('ERROR: Fetching Categories', 'ERROR', { duration: 600 });
      });
  }

  /**
   * function to fetch all the categories
   */
  getProducts() {
    this.productService.getAllProducts()
      .then((products: Product[]) => {
        this.products = products;
        this.analyzeData(); //  call funtion for charting
      })
      .catch(err => {
        console.log('FETCH ERR:', err);
        // this.snackbar.open('ERROR: Fetching Categories', 'ERROR', { duration: 600 });
      });
  }

  filterProducts(catCode) {
    const count = this.products.filter(x => {
      return x.categoryCode === catCode;
    });

    return count.length;
  }
}
