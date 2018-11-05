import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

import { Product } from '../../models/product';

@Component({
  template: `
  <h2>Confirm Product Delete</h2>
  <p>This Product will be deleted. <br />
  Please note that this data cannot be recovered.</p>
  <p><button type="button" mat-raised-button (click)="dialogRef.close(true)">Delete</button>
    <button type="button" mat-raised-button (click)="dialogRef.close()">Cancel</button></p>`
})
export class DeleteProductDialogComponent {
  constructor(public dialogRef: MatDialogRef<any>) { }
}

@Component({
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  displayedColumns: string[] = ['id', 'code', 'name', 'dateAdded'];
  dataSource;

  constructor() {
    this.dataSource = this.products;
  }

  ngOnInit() {}

}
