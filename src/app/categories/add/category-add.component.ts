import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-add',
  templateUrl: 'category-add.component.html',
})

export class CategoryAddComponent implements OnInit {
  @Output() categoryAdded: EventEmitter<Category> = new EventEmitter<Category>();

  category: Category = new Category();
  categoryForm: FormGroup;

  ngOnInit() {}

  constructor(private fb: FormBuilder) {
    this.categoryForm = fb.group({
      categoryName: ['', Validators.required],
      categoryCode: ['', Validators.required]
    });
  }

  /**
   * function to save record
   */
  saveCategory(e: Event) {
    e.preventDefault();
    this.categoryAdded.emit(this.category); // output added category to parent
    this.categoryForm.reset(); // reset the form after submit
  }
}
