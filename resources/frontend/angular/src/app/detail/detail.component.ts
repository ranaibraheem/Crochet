import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import { environment } from 'src/environments/environment';

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
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css', '../../styles.css']
})
export class DetailComponent implements OnInit {

  itemId:any;
  items:Collection[] = [];
  showModal: boolean=false;
  imagePath:string = 'assets/images/';

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getCollections();
    this.route.params.subscribe(params => {
      this.itemId = +(params['id']);
    })
  }

   getCollections(){
    this.httpClient.get<any>('http://127.0.0.1:8000/api/products').subscribe(Response => {
    this.items = Response.data;
    });
  }
  showHide()
  {
    this.showModal = !this.showModal;
  }
 ClickedOut(event:any) {
    if(event.target.className == "hover_bkgr") {
      this.showModal = false;
    }
 }


}
