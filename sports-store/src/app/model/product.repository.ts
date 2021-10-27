import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepostory {
  private products: Product[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((res) => {
      this.products = res;
      this.categories = res
        .map((p) => p.category)
        .filter((p, idx, arr) => arr.indexOf(p) == idx)
        .sort();
    });
  }

  getProducts(category: string | null = null): Product[] {
    return this.products.filter(
      (p) => p.category == null || p.category == category
    );
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  getCategories(): (string | undefined)[] {
    return this.categories;
  }
}
