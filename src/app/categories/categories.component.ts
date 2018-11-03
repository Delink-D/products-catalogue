import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService
    ) {}

  ngOnInit() {
    this.getCategories(); // get categories
  }

  /**
   * function to fetch all the categories
   */
  getCategories() {
    this.categoryService.getAllCategories()
      .then((categories: Category[]) => {
        console.log('CATEGORIES:', categories);
        this.categories = categories;
      })
      .catch(err => {
        console.log('FETCH ERR:', err);
        // snackbar
      });
  }

}
