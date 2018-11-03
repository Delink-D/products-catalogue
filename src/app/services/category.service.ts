import { Injectable } from '@angular/core';
import { Category } from './../models/category';
import { ApiService } from './api.service';

Injectable();
export class CategoryService {

  constructor(private api: ApiService) {}

  /**
   * function to get all the categories from the database
   */
  getAllCategories(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      this.api.fetchAll(Category.type)
        .then(res => {
          console.log('FETCH:', res);
        })
        .catch(err => {
          console.log('FETCH ERROR:', err);
          reject(err);
        });
    });
  }
}
