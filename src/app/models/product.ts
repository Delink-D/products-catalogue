export class Product {
  public static type: string = 'product';

  _id: string;
  type: string;
  productCode: string;
  productName: string;
  categoryCode: string;
  dateAdded: Date;
  dateUpdated: Date;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
