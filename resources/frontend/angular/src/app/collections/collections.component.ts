import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Collection{
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
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  imagePath:string = 'assets/images/';

  items:Collection[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  ngOnInit(): void {
    this.getCollections();
  }

   getCollections(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/products').subscribe(Response => {
    this.items = Response.data;
    });
  }

}
