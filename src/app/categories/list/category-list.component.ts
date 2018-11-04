import { Component, Input, Output, OnInit } from '@angular/core';
import { Category } from '../../models/category';

import { MatDialog, MatDialogRef, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  template: `
  <h2>Confirm Category Delete</h2>
  <p>This Category will be deleted. <br />
  Please note that this data cannot be recovered. <br />
  Please ensure that this category has no linked products.</p>
  <p><button type="button" mat-raised-button (click)="dialogRef.close(true)">Delete</button>
    <button type="button" mat-raised-button (click)="dialogRef.close()">Cancel</button>`
})
export class DeleteCategoryDialogComponent {
  constructor(public dialogRef: MatDialogRef<any>) { }
}

@Component({
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html',
})

export class CategoryListComponent implements OnInit {
  @Input() categories: Category[];
  displayedColumns: string[] = ['id', 'code', 'name', 'dateAdded'];
  dataSource;

  ngOnInit() {}

  constructor() {
    this.dataSource = this.categories;
  }
}
