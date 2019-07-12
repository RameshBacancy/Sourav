import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutletComponent } from './router-outlet.component';
import { routerOutletRoutingModule } from './router-outlet-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomserviceService } from 'src/app/customservice.service';
import { BooksService } from 'src/app/books.service';
import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';


@NgModule({
  declarations: [RouterOutletComponent, ProductsComponent, ProductdetailComponent, SidebarComponent],
  imports: [
    CommonModule, routerOutletRoutingModule
  ],
  providers: [BooksService, { provide: UrlSerializer, useClass: RouterOutletModule }]
})
// export class RouterOutletModule { }
export class RouterOutletModule extends DefaultUrlSerializer implements UrlSerializer {
  /** Converts a `UrlTree` into a url */
  serialize(tree: UrlTree): string {
    return super.serialize(tree).replace(/\(|\)|\w+-\w+:/g, '');
  }
}
