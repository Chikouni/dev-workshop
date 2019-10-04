import { DefisService } from './../../global/services/defis.service';
import { Defi } from './../../global/models/defi.model';
import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-defis',
  templateUrl: './defis.component.html',
  styleUrls: ['./defis.component.scss'],
  providers: [NgbProgressbarConfig]
})
export class DefisComponent implements OnInit {
defis: Defi[] = []
condition = false;
userData = localStorage.getItem('caeliUserData');
currentLvl: number = JSON.parse(this.userData).level;
width = 39 ;

  constructor( private defisService: DefisService, config: NgbProgressbarConfig) {
    config.max = 371;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
  ngOnInit() {
    this.defisService.getDefis().subscribe(defis => {
      this.defis = defis;
    })
    if(this.currentLvl == 0){
      this.width = 39;
    }
    else if(this.currentLvl == 1){
      this.width = 78;
    }
    else if(this.currentLvl > 1){
      this.width = this.currentLvl*33;
    }
  }


}
