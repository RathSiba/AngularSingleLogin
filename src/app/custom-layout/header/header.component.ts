import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoImage:any = "../assets/hp-md-logo.png";
  public logged = false;
  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    this.logged = true;

  }

}
