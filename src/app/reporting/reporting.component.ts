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
  }

}
