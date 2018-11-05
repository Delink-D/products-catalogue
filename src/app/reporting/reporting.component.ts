import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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
  noData: Boolean = false;

  constructor(
    private snackbar: MatSnackBar,
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
        this.noData = true;
        console.log('FETCH ERR:', err);
        this.snackbar.open('ERROR: Fetching Categories', 'ERROR', { duration: 600 });
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
        this.noData = true;
        console.log('FETCH ERR:', err);
        this.snackbar.open('ERROR: Fetching products', 'ERROR', { duration: 600 });
      });
  }

  filterProducts(catCode) {
    const count = this.products.filter(x => {
      return x.categoryCode === catCode;
    });

    return count.length;
  }

  /**
   * function to render graph to the DOM
   */
  analyzeData() {
    this.categories.forEach(category => {
      const item = { label: category.categoryName, y: this.filterProducts(category.categoryCode) };
      this.categoryProducts.push(item);
    });

    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Category Products graph'
      },
      data: [{
        type: 'column',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: this.categoryProducts
      }]
    });

    this.noData = false;
    chart.render();
  }
}
