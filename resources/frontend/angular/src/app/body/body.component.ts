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
  detailPath="detail/";
  items:Collection[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {}


  ngOnInit(): void {
    this.getCollections();
  }

  getCollections(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/products').subscribe(Response => {
    this.items = Response.data;
    });
  }


}
