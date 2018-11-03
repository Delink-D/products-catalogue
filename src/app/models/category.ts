export class Category {
  public static type: string = 'category';

  type: string;
  categoryCode: string;
  categoryName: string;
  dateAdded: Date;
  dateUpdated: Date;

  constructor(values: Object = {}) {
    (<any>Object).assign(this, values);
  }
}
