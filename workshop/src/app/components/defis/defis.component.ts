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
condition = true;

  constructor( private defisService: DefisService) {}

  ngOnInit() {
    this.defisService.getDefis().subscribe(defis => {
      this.defis = defis;
      console.log(this.defis);
    })
  }


}
