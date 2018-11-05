import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: 'product-add.component.html',
})

export class ProductAddComponent implements OnInit {
  @Output() productAdded: EventEmitter<Product> = new EventEmitter<Product>();

  product: Product = new Product();
  productForm: FormGroup;

  ngOnInit() {}

  constructor(private fb: FormBuilder) {
    this.productForm = fb.group({
      productName: ['', Validators.required],
      productCode: ['', Validators.required]
    });
  }

  /**
   * function to save record
   */
  saveCategory(e: Event) {
    e.preventDefault();
    this.productAdded.emit(this.product); // output added category to parent
    this.productForm.reset(); // reset the form after submit
  }
}
