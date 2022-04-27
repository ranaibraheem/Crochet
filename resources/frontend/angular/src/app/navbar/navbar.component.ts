import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  brand = "&#x1D520;&#x1D52F;&#x1D52C;&#x1D520;&#x1D525;&#x1D522;&#x1D531;";
  constructor() { }

  ngOnInit(): void {
  }

}
