import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:4000');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService();
