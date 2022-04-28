import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
export class Product{
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public image:string,
    public description:string
  ){

  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:Product[
  ] = [
 ];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/products').subscribe(data => {
      console.log(data);

    this.products = data;
    });
  }

}
