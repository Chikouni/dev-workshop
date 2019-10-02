import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuToggle = false;
  constructor() { }

  ngOnInit() {
  }

  burgerMenu(){
    this.menuToggle = !this.menuToggle;
  }

}
