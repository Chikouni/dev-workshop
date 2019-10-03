import { DefisService } from './../../global/services/defis.service';
import { Defi } from './../../global/models/defi.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defis',
  templateUrl: './defis.component.html',
  styleUrls: ['./defis.component.scss']
})
export class DefisComponent implements OnInit {
defis: Defi[] = []
condition = false;
userData = localStorage.getItem('caeliUserData');
currentLvl: number = JSON.parse(this.userData).level;
width = 39 ;

  constructor( private defisService: DefisService) {}

  ngOnInit() {
    this.defisService.getDefis().subscribe(defis => {
      this.defis = defis;
    })
    if(this.currentLvl > 1){
      this.width = this.currentLvl*33;
    }
  }


}
