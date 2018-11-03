import { environment } from '../../environments/environment';

export class ApiService {
  // constructor() {}

  /**
   * function to fetch all type objects from the api
   * @param type the object type
   */
  fetchAll(type: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      fetch(environment.api + type)
        .then((res: any) => {
          console.log('Fetched:', res.length, 'objects of', type);
          resolve(res);
        })
        .catch(err => {
          console.log('Error: fetching', type);
          reject(err);
        });
    });
  }
}
