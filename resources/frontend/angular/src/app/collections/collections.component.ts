import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Collection{
  constructor(
    public id:number,
    public name:string,
    public location:string,
    public image:string,
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
  totalLength: any;
  page: number = 1;

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
    this.totalLength=Response.data.length;
    });
  }
  onPageChange(page: number) {
    this.page = page;
    window.scrollTo(0, 0);
 }

}
