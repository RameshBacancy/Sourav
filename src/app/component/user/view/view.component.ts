import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from 'src/app/product';
import { Location } from '@angular/common'
import { from } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public products: Product[] = [
    new Product(1, "Sourav", "fdsfds"),
    new Product(2, "Product 002", "fdsfds"),
    new Product(3, "Product 003", "fdsfds"),
    new Product(4, "Product 004", "fdsfds"),
    new Product(5, "Product 005", "fdsfds"),
    new Product(6, "Product 006", "fdsfds"),
    new Product(7, "Product 007", "fdsfds"),
    new Product(8, "Product 008", "fdsfds")
  ];
  product: Product = this.products[0];

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.products.forEach((p: Product) => {
        if (p.id == params.id) {
          this.product = p;
        }
      });
    });



    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

  }

  id: number;
  private sub: any;
  goback() {
    this.location.path();
  }




}
