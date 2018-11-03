import { Component, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-add',
  templateUrl: 'category-add.component.html',
})

export class CategoryAddComponent implements OnInit {
  // @Output() categories: Category;

  category: Category;
  categoryForm: FormGroup;

  ngOnInit() {}

  constructor(private fb: FormBuilder) {
    this.categoryForm = fb.group({
      categoryName: ['', Validators.required],
      categoryCode: ['', Validators.required]
    });
  }
}
