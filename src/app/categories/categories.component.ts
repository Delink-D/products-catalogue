import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(
    private snackbar: MatSnackBar,
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
        this.categories = categories;
      })
      .catch(err => {
        console.log('FETCH ERR:', err);
        // this.snackbar.open('ERROR: Fetching Categories', 'ERROR', { duration: 600 });
      });
  }

  /**
   * function to add new category
   * @param category new category to be added
   */
  addCategory(category) {
    this.categoryService.updateCategory(category)
      .then(res => {
        console.log('success adding:', res);
        this.categories.push(res); // push added record to the category list
      })
      .catch(err => {
        console.log('ERROR:', err);
      });
  }

}
