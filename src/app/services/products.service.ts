import { Injectable } from '@angular/core';
import { Product } from './../models/product';
import { ApiService } from './api.service';

@Injectable()
export class ProductsService {

  constructor(private api: ApiService) {}

  /**
   * function to get all the products from the database
   */
  getAllProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      const type = 'products';
      this.api.fetchAll(type)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log('FETCH ERROR:', err);
          reject(err);
        });
    });
  }
}
