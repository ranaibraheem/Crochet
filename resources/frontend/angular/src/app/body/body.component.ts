import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Collection{
  constructor(
    public id:number,
    public name:string,
    public image:string,
    public location:string
  ){
  }
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  imagePath="assets/images/";
  detailPath="detail/:id";
  items:Collection[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {}

  // newCollections = [
  //   {
  //     id: 1,
  //     name: 'Item 1',
  //     image: 'crochet50.jpg',
  //     price: '43.00'
  //   },
  //   {
  //     id: 2,
  //     name: 'Item 2',
  //     image: 'crochet42.jpg',
  //     price: '36.00'
  // },
  // {
  //     id: 3,
  //     name: 'Item 3',
  //     image: 'crochet27.jpg',
  //     price: '50.00'
  // },
  // {
  //     id: 4,
  //     name: 'Item 4',
  //     image: 'crochet46.jpg',
  //     price: '45.00'
  // },
  // {
  //     id: 5,
  //     name: 'Item 5',
  //     image: 'crochet24.jpg',
  //     price: '65.00'
  // }
  // ]

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/products').subscribe(Response => {
    this.items = Response.data;
    });
  }


}
