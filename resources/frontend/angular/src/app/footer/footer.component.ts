import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  brand = "&#x1D520;&#x1D52F;&#x1D52C;&#x1D520;&#x1D525;&#x1D522;&#x1D531;";
  constructor() { }

  ngOnInit(): void {
  }

}
